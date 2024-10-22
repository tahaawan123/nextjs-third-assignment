import React from 'react'
import Link from 'next/link'
const HeaderPage = () => {
  return (
    <div>
        <header className=' flex h-16 items-center justify-between border-2 bg-slate-500 text-white '>
        <div><h1 className='font-bold ml-9 shadow-gray-800 shadow-lg'>Taha Awan</h1></div>
      <ul className='flex'>
        <li className='mr-36 hover:md:underline-offset-4 underline decoration-yellow-200 shadow-gray-800 shadow-md'><Link href='./'>Home</Link></li>
        <li className='mr-36 hover:md:underline-offset-4 underline decoration-yellow-200 shadow-gray-800 shadow-md'><Link href='./about'>About</Link></li>
        <li className='mr-36 hover:md:underline-offset-4 underline decoration-yellow-200 shadow-gray-800 shadow-md'><Link href='./contact'>Contact</Link></li>
      </ul>
      </header>
    </div>
  )
}

export default HeaderPage
