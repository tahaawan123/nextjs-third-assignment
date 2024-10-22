import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
//Image
import firstAssignment from "../public/firstimg.png"
import secondAssignment from "../public/secondimg.png"
const HeroSectionPage = () => {
  return (
    <div className='mt-14 flex justify-between mr-14'>
      <div className=' h-96 bg-slate-300 w-96 mb-9 ml-12 rounded-2xl shadow-purple-700 shadow-md '>
        <h1 className='font-bold text-xl text-center'>1st Assignment</h1>
        <Image src={firstAssignment.src}  alt="pic" width={400} height={400}/>
        <div className='p-6 text-center border bg-blue-600 mt-5 ml-20 mr-20 rounded-2xl'>
        <Link href="https://navbar-two-gamma.vercel.app" target='_blank'>Click here</Link>
        </div>
      </div>

      <div className='h-96 bg-slate-300 w-96 mb-9 ml-12 rounded-2xl shadow-purple-700 shadow-md'>
        <h1 className='font-bold text-xl text-center'>2nd Assignment</h1>
        <Image src={secondAssignment.src}  alt="Picture" width={400} height={400} />
        <div className='p-6 text-center border bg-blue-600 mt-5 ml-20 mr-20 rounded-2xl'>
        <Link href="https://nextjs-components-tan.vercel.app" target='_blank'>Click here</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionPage;
