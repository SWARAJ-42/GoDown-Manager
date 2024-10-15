'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import toast from 'react-hot-toast'

export default function Login() {
  const router = useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [user])

  const onLogin = async () => {
    try {
      setLoading(true)
      const response = await axios.post("/api/user/login", user)
      console.log("Login success", response.data)
      router.push(`/dashboard`)  // Redirect to dashboard or home page after successful login
    } catch (error:any) {
      console.log("Login failed", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen m-4">
      <Navbar loggedIn={false} />
      <div className="m-auto bg-gray-100/20 backdrop-blur-md shadow-2xl min-h-[600px] flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 rounded-2xl">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Log in to your account</h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                <div>
                  <Label className="text-lg font-bold" htmlFor="email">Email address</Label>
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
                  <Label className="text-lg font-bold" htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
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
                    {loading ? "Logging in..." : "Log in"}
                  </Button>
                </div>

                <div className="flex mx-auto font-semibold">
                  <p>Don't have an account ? </p><Link className="text-blue-800 mx-2" href="/signup">Sign up</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}