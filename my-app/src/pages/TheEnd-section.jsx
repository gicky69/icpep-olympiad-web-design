import '../css/TheEnd-section.css'
import kidImg from '../assets/svgs/kid/kid.svg'

function TheEnd() {
    return (
        <>
        <div className="final-sequence-wrapper">
            
            <div className="svg-background">
                <svg width="100%" height="100%" viewBox="0 0 1534 1923" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1480 30.0078C1534 180.174 1531.5 476.808 1089.5 462.008C537 443.508 30 153.508 30 631.008C30 1108.51 525.5 819.508 751 830.508C976.5 841.508 1036.5 952.008 1036.5 1052.01C1036.5 1152.01 879.432 1189.16 689 1198.51C498.568 1207.86 506.541 1807.94 614 1892.51" stroke="url(#paint0_linear_348_321)" strokeWidth="60" strokeLinecap="round"/>
                    <defs>
                        <linearGradient id="paint0_linear_348_321" x1="184.135" y1="-119.492" x2="-717.822" y2="1330.34" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF0055"/>
                            <stop offset="0.259615" stopColor="#40C0AC"/>
                            <stop offset="0.524038" stopColor="#40C0AC"/>
                            <stop offset="0.743439" stopColor="#40C0AC" stopOpacity="0"/>
                            <stop offset="0.817034" stopColor="#40C0AC" stopOpacity="0"/>
                            <stop offset="1" stopColor="#40C0AC"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <section className="theend-section">
                <div className="theend-container">

                    {/* THE BACKGROUND LINE */}
                    

                    {/* THE TEXT CONTENT */}
                    <div className="theend-content">
                        <h1 className="main-heading">We’ve seen the code, and we’ve felt the pulse.</h1>
                        <h1 className="sub-heading">The only question left is...</h1>
                    </div>
                </div>
            </section>
            <section className="kidtheend-section">
                <div className="kid-illustration-container">
                    <div className="kid-illustration-content">                            
                        <svg 
                            width="647" 
                            height="1032" 
                            viewBox="0 0 647 1032" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            {/* Move the image OUT of <defs> so it actually renders */}
                            <image 
                                href={kidImg} // Removed quotes so React uses the variable
                                width="100%" 
                                height="100%" 
                                preserveAspectRatio="xMidYMid slice" 
                            />
                        </svg>

                    </div>
                </div>
            </section>

        </div>
        </>
        
        
    );
}

export default TheEnd;