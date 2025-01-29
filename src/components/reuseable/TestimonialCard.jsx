import React from 'react'
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({testimonies}) => {
  return (
    <div className='flex flex-col gap-5 px-7 border border-[#006B6A] py-5 rounded-md'>
        <div className='flex'>
            {[...Array(testimonies.rating)].map((_, index) => (
                <FaStar className='text-teal-700' size={25} key={index}/>
            ))}
        </div>
        <p>
            {testimonies.desc}
        </p>
        <div className='flex items-center gap-3'>
            <span><img src={testimonies.img} alt="" className='w-[50px]'/></span>
            <div className='flex flex-col'>
                <p className='font-bold'>{testimonies.name}</p>
                <p>{testimonies.group}</p>
            </div>
            
        </div>
    </div>
  )
}

export default TestimonialCard