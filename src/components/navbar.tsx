"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Search } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleLoggedIn = () => setIsLoggedIn(!isLoggedIn);

  return (
    <nav className="font-semibold my-2 m-auto max-w-7xl rounded-lg fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Button onClick={toggleLoggedIn} variant="secondary">
                    Logout
                  </Button>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-10 w-64 bg-background/50"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Button variant="ghost" className="font-bold">
                    Login
                  </Button>
                  <Button className="font-bold">Sign Up</Button>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/90 backdrop-blur-lg">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-10 w-full bg-background/50"
              />
            </div>
            {isLoggedIn ? (
              <Button
                onClick={toggleLoggedIn}
                variant="secondary"
                className="w-full"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button variant="ghost" className="w-full mb-2">
                  Login
                </Button>
                <Button className="w-full">Sign Up</Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
