import '../css/Header.css'
import keyboard from "../assets/keyboard.svg";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Header() {

    const mainRef = useRef(null);

    useGSAP(() => {

        const q = gsap.utils.selector(mainRef);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "+=1500",
                pin: true,
                pinSpacing: true,
                scrub: 1,
                pinType: "fixed",
            }
        });

        // 🔥 INITIAL STATES
        gsap.set(q(".tagline"), { opacity: 0, y: 50 });
        gsap.set(q(".header-line"), { opacity: 0, y: 80 });

        // 🔥 1. TAGLINE FIRST
        tl.to(q(".tagline"), {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out"
        })

        // 🔥 2. KEYBOARD APPEARS
        .from(q(".keyboard-wrapper"), {
            y: -50,
            opacity: 0,
            duration: 2,
            ease: "power2.out"
        })

        // 🔥 3. KEYBOARD MOVES DOWN (REVEAL TEXT)
        .to(q(".keyboard-wrapper"), {
            y: 380, // 🔥 adjust this for reveal distance
            duration: 3,
            ease: "none"
        })

        // 🔥 4. TEXT REVEALS UNDER KEYBOARD
        .to(q(".header-line"), {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1.5,
            ease: "power2.out"
        }, "-=2") // 🔥 overlaps with keyboard movement

    }, { scope: mainRef });

    return(
        <div className="headersec-container" ref={mainRef}>

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

                <div className="header-title">
                    <h1 className="header-line">Computer</h1>
                    <h1 className="header-line" style={{ fontStyle : "italic" }}>
                        Engineering
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default Header;