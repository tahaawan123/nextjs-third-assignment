import React from 'react'
import Image from 'next/image'


import imageTaha from "../public/taha.jpg"
const HeroSection = () => {
  return (
    <div className='h-96 mt-24 flex m-12 bg-cyan-600 rounded-xl shadow-2xl shadow-cyan-500 '>
      <h1 className='text-6xl  font-mono mt-28 ml-20'>Hello I am Taha </h1>
      
  <Image src={imageTaha.src}
  alt={"tahaImage"}
 width={300}
 height={300}
  className='rounded-[50%]   ml-72 shadow-md shadow-slate-950'
  />

    </div>
  )
}

export default HeroSection
