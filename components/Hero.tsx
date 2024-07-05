import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
            className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
            fill='white' />
          <Spotlight
            className='top-10 left-full h-[80vh] w-[50vw]' 
            fill='green' />
          <Spotlight
            className='top-28 left-80 h-[80] w-[50vw]'
            fill='white' />
      </div>
      <div className="h-screen w-full flex-col dark:bg-black-100
      bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.2] flex 
      items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center
      justify-center dark:bg-black-100 bg-white
      [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Marketing Digital Terceirizado
          </p>
         

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[80px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1.2xl">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p>
           <a href='#about'>
            <MagicButton
                title="Show my work" 
                icon={<FaLocationArrow />}
                position='right'
                />

           </a>
          
        </div>
      </div>
    </div>
  )
}

export default Hero