import arduinoSVG from '../assets/svgs/arduino/Arduino Uno 2.svg'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../css/explain-section.css'


gsap.registerPlugin(ScrollTrigger);

function Explaination() {
    const mainRef = useRef(null);

        useGSAP(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".explaination-container",
                    start: "top top",
                    end: "+=2000",      // <-- CRITICAL: Kept this at 2000px so it doesn't overlap next section!
                    pin: true,
                    pinSpacing: true, 
                    scrub: 1,
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
            <section className="explaination-container">
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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nam in ultrices lorem, vel accumsan sem. Ut gravida et 
                                felis laoreet ultrices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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