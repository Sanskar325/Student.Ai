import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {

    const navigate = useNavigate()

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Unleash your creativity with<br/>  <span className='text-primary'>AI-powered content tools</span></h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Take your content to the next level with our comprehensive AI toolkit. Whether you're writing, designing, or optimizing - we've got you covered.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-[#6D1F2C] text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>create now</button>
            <a href="https://www.youtube.com/watch?v=KUW_3t4SmL0" target="_blank" rel="noopener noreferrer">
            <button className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch Video</button>
          </a>
        </div>

        
      
    </div>
  )
}

export default Hero
