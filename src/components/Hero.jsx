import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../Utils'

const Hero = () => {
    const [videoSrc, setVideoSrc] = React.useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo)
    const handleVideoSrcSet = ()=>{
        if (window.innerWidth > 760) {
            setVideoSrc(heroVideo)
        } else {
            setVideoSrc(smallHeroVideo)
        }
    }
    useEffect(()=>{
        window.addEventListener('resize',handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        }
    },[])
  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      delay: 1,
    })
  }, [])
  useGSAP(()=>{
    gsap.to("#cta",{
        opacity: 1,
        y: -50,
        delay: 1,
    })

  },[])

  return (
    <section className='w-full h-[calc(100vh-60px)] bg-black flex flex-col items-center justify-center'>
      <div
        id='hero'
        className='text-center font-semibold text-3xl text-[#94928b] opacity-0 mb-8'
      >
        iPhone 15 Pro
      </div>
      <div className='md:w-10/12 w-9/12'>
        <video
        className='pointer-events-none'
        autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type='video/mp4'/>
        </video>
        
      </div>
      <div id='cta'
      className='flex flex-col items-center opacity-0 translate-y-20'>
        <a href="#highlights" style={{padding: "10px 30px"}} className=' p-10 rounded-3xl bg-primary my-5 hover:bg-transparent border border-transparent hover:border hover:text-primary hover:border-primary'>Buy</a>
        <p className='font-normal text-xl'>From $199/month or $999</p>

      </div>
    </section>
  )
}
export default Hero