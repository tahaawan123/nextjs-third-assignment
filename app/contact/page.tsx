import React from 'react'
import Link from 'next/link';
const ContactPage = () => {
  return (
    <div className='flex items-center justify-center h-screen  text-white ' >
      <form action="/action" className='bg-gray-700 p-11 rounded shadow-md  shadow-slate-200'>
      <label htmlFor="name">Name:</label><br />
      <input type="text" placeholder='Enter Your Name is here ' size={30}/><br />
      <label htmlFor="email">Email:</label><br />
      <input type="Email" placeholder='Enter Your Email is here' size={30} /><br />
      <label htmlFor="message">Message:</label><br />
      <input type="text" placeholder='Enter Your Message is here' size={30} /><br />
     
     <button type='button' className='p-2 bg-blue-500 mt-2 rounded hover:bg-blue-800'>Send message</button>
      </form>
    </div>
  )
}

export default ContactPage;
