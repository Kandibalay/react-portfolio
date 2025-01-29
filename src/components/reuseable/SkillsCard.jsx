import React from 'react'
import { skills } from '../../Db'

const SkillsCard = ({skillset}) => {
  return (
    <div className='bg-[#F5FCFF] flex flex-col items-center lg:items-start gap-5 p-5 rounded-md hover:border-b-[2px] hover:border-b-blue-500'>
       <span className='bg-white w-[25%] rounded-md flex items-center  justify-center'>
       <img src={skillset.icon} alt="" className='bg-white rounded-md w-[80%] '/>
       </span>
        <h3 className='font-bold text-lg'>{skillset.name}</h3>
        <p className='text-md'>{skillset.desc}</p>
    </div>
    
  )
}

export default SkillsCard