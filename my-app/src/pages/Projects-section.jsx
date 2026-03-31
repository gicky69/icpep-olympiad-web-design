import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../css/projects-section.css';

import img1 from '../assets/img/museum/1.png';
import img2 from '../assets/img/museum/2.png';
import img3 from '../assets/img/museum/3.png';
import img4 from '../assets/img/museum/4.png';
import img5 from '../assets/img/museum/5.png';
import img6 from '../assets/img/museum/6.png';
import img7 from '../assets/img/museum/7.png';
import img8 from '../assets/img/museum/8.png';
import img9 from '../assets/img/museum/9.png';
import img10 from '../assets/img/museum/10.png';

gsap.registerPlugin(ScrollTrigger);

// Then in your map function:
// style={{ marginTop: item.offsetY, marginLeft: item.marginLeft }}

function Projects() {
    const mainRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {
        if (!trackRef.current || !mainRef.current) return;

        const track = trackRef.current;

        const getScrollAmount = () => {
            return track.scrollWidth - window.innerWidth;
        };

        const section = document.querySelector(".museum-section");
        const container = document.querySelector(".museum-track");

        gsap.ticker.lagSmoothing(0);

        gsap.to(container, {
            x: () => -getScrollAmount(),
            ease: "none",
            scrollTrigger: {
                trigger: section,
                pin: true,
                start: "top top",
                end: () => `+=${getScrollAmount()}`,
                scrub: true,
                invalidateOnRefresh: true,
            }            

        });

        const observer = new ResizeObserver(() => ScrollTrigger.refresh());
        observer.observe(track);

        return () => observer.disconnect();
    }, { scope: mainRef });

    const items = [
        // The large starting image
        { img: img1, text: "Kiosks connect the kitchen...", offsetY: "15vh", marginLeft: "0vw", width: "400px" }, 
        
        // The wave starts going down and up
        { img: img2, text: "Arduino UNO...", offsetY: "55vh", marginLeft: "4vw", width: "250px" },
        { img: img3, text: "Ultrasonic Sensor...", offsetY: "20vh", marginLeft: "2vw", width: "280px" },
        { img: img4, text: "Nano drone...", offsetY: "65vh", marginLeft: "5vw", width: "220px" },
        
        // Middle section
        { img: img5, text: "Smart Home...", offsetY: "30vh", marginLeft: "3vw", width: "250px" },
        { img: img6, text: "Robotics...", offsetY: "50vh", marginLeft: "6vw", width: "200px" },
        { img: img7, text: "IoT Devices...", offsetY: "15vh", marginLeft: "2vw", width: "240px" },
        
        // End of the timeline
        { img: img8, text: "AI Applications...", offsetY: "40vh", marginLeft: "4vw", width: "350px" },
        { img: img9, text: "Blockchain...", offsetY: "60vh", marginLeft: "5vw", width: "200px" },
        { img: img10, text: "Cloud Computing...", offsetY: "25vh", marginLeft: "3vw", width: "300px" },
    ];

   return (
    <div ref={mainRef} className="museum-wrapper">
        <section className="museum-section" ref={trackRef}>
            <div className="museum-track" >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="museum-item"
                        style={{ 
                            marginTop: item.offsetY,
                            marginLeft: item.marginLeft,
                            width: item.width,
                         }}
                    >
                        <img src={item.img} alt={item.text} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
    );
}

export default Projects;
