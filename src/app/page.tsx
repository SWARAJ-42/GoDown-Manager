import { Navbar } from '@/components/navbar'
import React from 'react'
import Link from 'next/link'

function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Navbar />
      <div className='text-6xl font-extrabold text-white m-10'>
        Godown-Manager  
      </div>
      <div>
        <Link className='text-xl p-4 bg-black rounded-xl text-white' href="/signup">Get Started</Link>
      </div>
    </div>
  )
}

export default Home