import '../css/Header.css'


function Header() {
    return(
        <>
        <div className="object-container">
            <div className="hook-container">
                <h1 className="hook-val">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h1>
                <div className="object-container">
                    {/* hook-obj-img */}

                </div>
            </div>

            <div className="indicator-container">
                <span className="indicator-span">
                    <p className="indicator-text">Scroll to navigate!</p>
                </span>
            </div>
        </div>
        </>
    )
}

export default Header;