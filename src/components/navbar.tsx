"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function Navbar({ loggedIn }: { loggedIn: boolean }) {
  const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      toast.success("Logout successful");
      setIsLoggedIn(false);
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <nav className="font-semibold my-2 m-auto max-w-[80%] rounded-lg fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Logo</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {isLoggedIn ? (
                <>
                  <Button
                    className="font-semibold"
                    onClick={logout}
                    variant="secondary"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" className="font-bold">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="font-bold">Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90 backdrop-blur-lg rounded-b-lg">
            {isLoggedIn ? (
              <Button
                onClick={logout}
                variant="secondary"
                className="w-full font-bold"
              >
                Logout
              </Button>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost" className="font-bold">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="font-bold">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
