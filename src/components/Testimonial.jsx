import React from 'react'
import { testimonials } from '../Db'
import TestimonialCard from './reuseable/TestimonialCard'

const Testimonial = () => {
  return (
    <div className='px-6 lg:px-10 bg-white py-10'>
        <div className='my-20 text-center lg:text-left flex flex-col gap-5 lg:gap-1'>
            <h5 className='font-bold text-sm'>Clients Feedback</h5>
            <h2 className='font-bold text-4xl'>Customer testimonials</h2>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
            {
                testimonials.map((feedback)=>{
                    return (
                        <div key={feedback.id}>
                            <TestimonialCard testimonies={feedback}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Testimonial