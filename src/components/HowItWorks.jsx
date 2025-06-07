import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../Utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../Utils/animation'

const HowItWorks = () => {
    const videoRef = useRef();
    
    useGSAP(() => {
        // Fixed chip animation - using gsap.from correctly
        gsap.from('#chip', {
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut',
            scrollTrigger: {
                trigger: "#chip",
                start: "20% bottom"
            }
        })
        
       
        gsap.fromTo('.g_fadeIn', 
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".g_fadeIn",
                    start: "top 90%",
                    toggleActions: "restart reverse restart reverse"
                }
            }
        )
    }, [])

    return (
        <section className='sm:py-32 py-20 sm:px-10 px-5'>
            <div className='max-w-screen-xl mx-auto'>
                {/* Chip Section */}
                <div className='flex justify-center items-center w-full my-20'>
                    <img
                        id='chip'
                        src={chipImg} 
                        alt="ChipImage" 
                        className='w-[180px] h-[180px]'
                    />
                </div>

                {/* Title Section */}
                <div className='flex flex-col items-center mb-20'>
                    <h2 className='text-4xl md:text-7xl font-semibold text-center mb-4'>
                        A17 Pro Chip
                    </h2>
                    <p className='text-4xl md:text-7xl font-semibold text-center'>
                        A Monster win for gaming.
                    </p>
                    <p className='text-[#86868b] font-semibold text-xl md:text-2xl py-10 text-center max-w-3xl'>
                        It's here in the history of apple GPUs.
                    </p>
                </div>

                {/* Video Frame Section */}
                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex justify-center items-center'>
                        <div className='overflow-hidden'>
                            <img 
                                src={frameImg} 
                                alt="frame" 
                                className='bg-transparent relative z-10'
                            />
                        </div>
                        <div className='absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden'>
                            <video 
                                className='pointer-events-none w-full h-full object-cover'
                                playsInline 
                                preload='none' 
                                muted 
                                autoPlay 
                                ref={videoRef}
                            >
                                <source src={frameVideo} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <p className='text-[#86868b] font-semibold text-center mt-3'>
                        Honkai: Star Rail
                    </p>
                </div>

                {/* Bottom Content Section - Fixed Animation */}
                <div className="flex flex-col gap-16">
                    {/* Top Row - Two Columns */}
                    <div className="flex md:flex-row flex-col justify-between items-start gap-12 md:gap-24">
                        {/* Left Column */}
                        <div className="flex-1 flex justify-center items-start flex-col">
                            <p className="text-[#86868b] text-xl font-normal md:font-semibold g_fadeIn">
                                A17 pro is an entirely new class of iPhone chip that delivers our {' '}
                                <span className="text-white">
                                    best graphics performance by far
                                </span>
                                .
                            </p>
                        </div>

                        {/* Right Column */}
                        <div className="flex-1 flex justify-center items-start flex-col">
                            <p className="text-[#86868b] text-xl font-normal md:font-semibold g_fadeIn">
                                Mobile{' '}
                                <span className="text-white">
                                    games will look and feel so immersive
                                </span>
                                , with incredibly detailed environments and characters.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row - GPU Section */}
                    <div className='flex justify-center items-center'>
                        <div className='flex flex-col items-center text-center g_fadeIn'>
                            <p className='text-[#86868b] text-xl font-normal md:font-semibold'>New</p>
                            <p className='text-white text-3xl md:text-5xl font-normal md:font-semibold my-2'>Pro-class GPU</p>
                            <p className='text-[#86868b] text-xl font-normal md:font-semibold'>with 6 cores</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks