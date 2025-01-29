import React from 'react'

const Contact = () => {
  return (
    <div className='px-6 lg:px-10 py-15 lg:py-30 flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-5 my-10 text-center'>
            <h5 className='font-bold text-sm'>Get In Touch</h5>
            <h2 className='font-bold text-4xl'>Contact Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <form className='flex flex-col gap-5 w-full lg:w-[50%]'>
            <div className='flex flex-col lg:flex-row w-full gap-5'>
                <label htmlFor='firstname' className='flex flex-col w-full gap-1'>
                    First Name
                    <input type="text" id="firstname" name="firstname"  className='border py-1 px-3 border-[#282938] rounded-sm outline-none'/>
                </label>
                <label htmlFor='lastname' className='flex flex-col w-full gap-1'>
                    Last Name
                    <input type="text" id="lastname" name="lastname" className='border py-1 px-3 border-[#282938] rounded-sm outline-none'/>
                </label>
            </div>
            <div className='flex flex-col lg:flex-row w-full gap-5'>
                <label htmlFor='email' className='flex flex-col w-full gap-1'>
                    Email
                    <input type="email" id="email" name="email" className='border py-1 px-3 border-[#282938] rounded-sm outline-none' />
                </label>
                <label htmlFor='phonenumber' className='flex flex-col w-full gap-1'>
                    Phone Number  
                    <input type="number" id="phonenumber" name="phonenumber" className='border py-1 px-3 border-[#282938] rounded-sm outline-none' />
                </label>
            </div>
                <label htmlFor='message'>
                    Message
                    <textarea id="message" name="message" rows="6" cols="50" placeholder='Type your Message...' className='border border-[#282938] w-full rounded-sm text-sm px-3 py-2' />
                </label>
                <label htmlFor="check" className='flex gap-3'>
                    <input type="checkbox" className='border-none'  />
                    I accept the terms
                </label>
                <button type="submit" className='bg-[#5E3BEE] text-white py-2 rounded-sm border-none'>Submit</button>
            
            
        </form>
    </div>
  )
}

export default Contact