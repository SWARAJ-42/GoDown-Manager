'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import toast from 'react-hot-toast'

export default function Signup() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  const onSignUp = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/user/signup", user)
      console.log("Signup success", response.data)
      router.push("/login")
    } catch (error:any) {
      console.log("Signup failed", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-conic-dark-gray">
      <Navbar />
      <div className="m-auto bg-gray-100/20 backdrop-blur-md shadow-2xl min-h-[600px] flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 rounded-2xl">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Create your account</h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSignUp(); }}>
                <div>
                  <Label className="text-lg font-bold" htmlFor="username">Enter a unique username:</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    required
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    className="bg-white/30 mt-1 text-lg font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-lg font-bold" htmlFor="email">Enter your email address:</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="bg-white/30 mt-1 text-lg font-semibold"
                  />
                </div>

                <div>
                  <Label className="text-lg font-bold" htmlFor="password">Enter your password:</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="bg-white/30 mt-1 text-lg font-semibold"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full font-semibold text-lg"
                    disabled={buttonDisabled || loading}
                  >
                    {loading ? "Signing up..." : "Sign up"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}