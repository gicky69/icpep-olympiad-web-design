import arduinoSVG from '../assets/svgs/arduino/Arduino Uno 2.svg'
import orangeRadiant from "../assets/svgs/gradient/orangeEllipse-Full.svg";
import blueRadiant from "../assets/svgs/gradient/blueEllipse-Full.svg";
import keyboard from "../assets/keyboard.svg";

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../css/explain-section.css'


gsap.registerPlugin(ScrollTrigger);

function Explaination() {
    const mainRef = useRef(null);

        useGSAP(() => {
            const headerTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".header-container",
                    start: "top top",
                    end: "+=1500", // adjust length as needed
                    pin: true,
                    scrub: 1,
                }
            });

            // 1. Tagline reveal (line by line)
            headerTl.from(".tagline-line", {
                y: 100,
                opacity: 0,
                stagger: 0.3,
                ease: "power3.out"
            });

            // 2. Keyboard reveal (after tagline)
            headerTl.from(".keyboard-wrapper img", {
                y: -50,
                opacity: 0,
                scale: 0.9,
                ease: "power2.out"
            });

            // 3. Title reveal (after keyboard)
            headerTl.from(".header-line", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                ease: "power3.out"
            });

           headerTl.to(".keyboard-wrapper", {
                y: () => {
                    return window.innerWidth < 768
                        ? window.innerHeight * 0.15
                        : window.innerHeight * 0.40;
                },
                duration: 3,
                ease: "none"
            });
            headerTl.to(".header-title", {
                zIndex: 1999,
            });

            headerTl.to(".orangeRadiant-header", {
                y: 150, // 👈 moves DOWN
                ease: "none"
            }, 0);



            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".explaination-container",
                    start: "top top",
                    end: "+=1500",      // <-- CRITICAL: Kept this at 2000px so it doesn't overlap next section!
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

           
            // 1. These happen FIRST
            tl.from(".arduino-svg", {
                y: 200,
                opacity: 0,
                ease: "power2.inOut",
            })
            // The "<" means "start at the same time as the previous animation (arduino)"
            .from(".explaination-title", {
                opacity: 0,
                ease: "power2.inOut",
            })
            .from(".explaination-description", {
                opacity: 0,
                ease: "power2.inOut"
            });
            
            // 2. This happens SECOND
            const path = document.querySelector(".draw-path");
                
            if (path) {
                const length = path.getTotalLength();

                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length // (Don't forget the minus sign to draw backwards!)
                });

                tl.to(path, {
                    strokeDashoffset: 0,
                    ease: "none" 
                }); 
            }

            const quoteTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".quote-section",
                    start: "top", 
                    // If you want to pin it and scroll through it:
                    end: "+=2000",
                    pin: true,        // Use 'true' instead of '1'
                    pinSpacing: true, // Use 'true' instead of '1'
                    scrub: 1,         // Use scrub when pinning instead of toggleActions
                }
            });

            // The float-up animation for the quote
            quoteTl.from(".quote-text", {
                y: 100,           // Starts 100px lower
                opacity: 0,       // Starts invisible
                duration: 1.5,    // Takes 1.5 seconds to glide into place
                ease: "power3.out" 
            });
        }, { scope: mainRef });


    return(
        <>
        <div ref={mainRef}>

            <div className="header-explain-container">
                <section className="header-container">
                    <div className="keyboard-layer">
                    
                        <div className="tagline">
                            <div className="tagline-line">From a single line of code</div>
                            <div className="tagline-line" style={{ marginLeft: "32px" }}>
                                to the pulse of a machine.
                            </div>
                        </div>

                        <div className="keyboard-wrapper">
                            <img src={keyboard} alt="Keyboard" />
                        </div>

                        <div className="header-title-wrapper">
                            <div className="header-title">
                                <div className="header-line">Computer</div>
                                <div className="header-line" style={{ fontStyle : "italic" }}>Engineering</div>
                            </div>
                        </div>

                    </div>
                    {/* <img className="orangeRadiant-header" src={orangeRadiant} alt="Half Orange"/> */}
                    
                    
            
                </section>

                <section className="explaination-container">
                    {/* <img className="blueRadiant-header" src={blueRadiant} alt="Half Blue" /> */}
                    <svg className="bg-line-svg" width="1920" height="1058" viewBox="0 0 1920 1058" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="draw-path" d="M1930.5 -32.9996C1930.5 25.5006 1776 508.5 1498.5 499.5C1221 490.5 1270.5 331.5 961.5 331.5C729.921 331.5 810 583.5 494.5 583.5C300.959 583.5 350 884.5 142 884.5C-9.88295 884.5 44.0007 1031 -117.5 1055.5" stroke="url(#paint0_linear_131_197)" stroke-width="20"/>
                    <defs>
                    <linearGradient id="paint0_linear_131_197" x1="1699.34" y1="-80.2592" x2="-392.697" y2="355.777" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4291FF"/>
                    <stop offset="1" stop-color="#8A38F5"/>
                    </linearGradient>
                    </defs>
                    </svg>


                    <div className="item-container">
                        <div className="item-wrapper">
                            <div className="image-stack">
                                <div className="arduino-container">
                                    <svg className="arduino-svg"xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="870" height="841" viewBox="0 0 870 841" fill="none">
                                        <rect width="870" height="870" fill="url(#pattern0_184_25)"/>
                                        <defs>
                                        <pattern id="pattern0_184_25" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_184_25" transform="scale(0.000420168)"/>
                                        </pattern>
                                        <image id="image0_184_25" width="2381" height="2379" xlinkHref={arduinoSVG}/>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-content">
                                <h2 className="explaination-title">It’s More Than Just Circuits</h2>
                                <p className="explaination-description">
                                    Computer engineering is an integrated branch of engineering that blends 
                                    computer science with electronic engineering to develop hardware and 
                                    software systems. It goes beyond simply building computers; it involves 
                                    designing everything from the tiny microprocessors in your smartphone to 
                                    the massive supercomputers that predict the weather. By mastering both 
                                    digital logic and high-level programming, engineers ensure that machines 
                                    are not only fast but also efficient and reliable. At its core, it is about 
                                    problem-solving through the lens of technology, creating the infrastructure 
                                    that defines our modern world. It is the art of making sure that every bit 
                                    of data has a physical path to travel and every physical component has a 
                                    logical reason to move.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section className="quote-section">
                <div className="quote-container">
                    <h1 className="quote-text">
                        Beyond the pulse lies the harmony of the machine: its <span className="highlight-pink">physical body</span> and its <span className="highlight-green">digital soul</span>.
                    </h1>
                </div>
            </section>

        </div>
        
    </>
    )
}

export default Explaination;