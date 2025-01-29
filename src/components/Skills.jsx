import React from 'react'
import SkillsCard from './reuseable/SkillsCard'
import { skills } from '../Db'
const Skills = () => {
  return (
    <div className='px-6 lg:px-10 bg-white'>
        <div className=' my-15 lg:my-25 flex flex-col gap-3 text-center lg:text-left'>
            <h3 className=' text-sm font-bold'>My Skills</h3>
            <h1 className='text-[40px] font-bold'>My Expertise</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
            {skills.map((skill) => {
                return(
                    <div key={skill.id}>
                        <SkillsCard skillset={skill} />
                    </div>
                )   
            })}
           
        </div>
        
        
    </div>
  )
}

export default Skills