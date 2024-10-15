"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { User, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import GodownHierarchy from "@/components/dashboard/GoDownHierarchy";
import { ItemDisplay } from "@/components/dashboard/ItemDisplay";

interface Item {
  item_id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
  status: string;
  godown_id: string;
  brand: string;
  attributes: {
    [key: string]: any;
  };
  image_url: string;
}

export default function ProfilePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const handleItemSelection = (item: Item) => {
    setSelectedItem(item);
    if (isMobile) setSidebarOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const router = useRouter();
  const [data, setData] = useState({username: ""});

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/user/userdetails");
      setLoggedIn(true); 
      setData(res.data.data);
    } catch (error: any) {
      console.log("User not logged in");
      setLoggedIn(false);
    }
  };

  useEffect(() => {
    getUserDetails();
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Navbar loggedIn={loggedIn} />

      <div className="flex h-[700px] w-[80%] mt-16 mx-auto rounded-md relative">
        {/* Toggle button */}
        <Button
          className="absolute top-4 left-4 z-30 lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Sidebar */}
        <div className={`lg:relative lg:w-[40%] absolute inset-y-0 left-0 z-20
                        transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-[150%]'}
                        lg:translate-x-0 transition-transform duration-300 ease-in-out
                        bg-gray-800/80 backdrop-blur-md text-white p-8 flex flex-col 
                        ${isMobile ? 'w-3/4 rounded-xl' : 'rounded-l-xl'}`}>
          <div className="mb-6 mt-12 lg:mt-0">
            <h2 className="text-2xl font-bold mb-4">Search</h2>
            <form onSubmit={handleSearch} className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-700 text-white placeholder-gray-400 border-gray-600"
              />
              <Button type="submit" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </form>
          </div>
          <GodownHierarchy onItemSelect={handleItemSelection} />
        </div>

        {/* Main content */}
        <div className={`flex-1 flex flex-col p-8 bg-gray-100/40 backdrop-blur-md 
                         transition-all duration-300 ease-in-out
                         ${isMobile ? 'w-full rounded-xl' : 'lg:w-[60%]'} rounded-r-xl`}>
          <div className="mb-6">
            <div className="flex items-center mb-4">
              <User className="h-8 w-8 mr-4 text-gray-600" />
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome, {data.username}
              </h1>
            </div>
          </div>
          <ItemDisplay item={selectedItem} />
        </div>
      </div>
    </div>
  );
}