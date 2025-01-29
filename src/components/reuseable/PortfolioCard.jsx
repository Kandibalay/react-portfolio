import React from 'react'
import arrowIcon from '../../assets/image/arrow icon.svg'

const PortfolioCard = ({myPortfolio}) => {
  return (
    <div className='flex flex-col gap-2 bg-white shadow-md rounded-md '>
        <img src={myPortfolio.img} alt="portfolio-image" className='rounded-md'/>
        <div className='flex flex-col gap-3 px-5 py-5'>
            <h2 className='font-bold text-xl'>{myPortfolio.name}</h2>
            <p>{myPortfolio.desc}</p>
            <div className='flex gap-3'>
                <a href={myPortfolio.link} target="_blank" className='font-bold text-sm decoration-solid'>{myPortfolio.view}</a>
                <img src={arrowIcon} alt="arrow-icon" className='w-[10px]'/>
            </div>
            <hr className='w-[35%] border border-blue-400 -mt-2'/>
        </div>
    </div>
  )
}

export default PortfolioCard