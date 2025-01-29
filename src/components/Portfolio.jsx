import React from 'react'
import Button from './reuseable/Button'
import { FaGithub } from 'react-icons/fa'
import { portfolio } from '../Db'
import PortfolioCard from './reuseable/PortfolioCard'

const Portfolio = () => {
  return (
    <div className='px-6 lg:px-10 py-10'>
        <div className='flex flex-col lg:flex-row items-center lg:items-left gap-10 lg:gap-0 justify-between my-10 lg:my-16'>
            <div className='text-center lg:text-left flex flex-col gap-5 lg:gap-1'>
                <h5 className='font-bold text-sm'>Recent Projects</h5>
                <h2 className='font-bold text-4xl'>My Portfolio</h2>
            </div>
            <div>
            <Button display='flex' items='center' gap='5px' icon={<FaGithub/>} content='Visit my Github' bgColor='#7E69D3' typeColor='white'  />
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 w-full  justify-between items-center'>
            {
                portfolio.map((port)=>{
                    return (
                        <div key={port.id}>
                            <PortfolioCard myPortfolio={port}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Portfolio