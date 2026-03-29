import '../css/explain-section.css'


function Explaination() {
    return(
        <>
        <div className="explaination-container">
            <div className="item-container">
                <div className="item-wrapper">
                    <div className="image-stack">
                        <div className="explain-img-card card-back"></div>
                        <div className="explain-img-card card-front"></div>
                    </div>

                    <div className="text-content">
                        <h2 className="explaination-title">Lorem ipsum<br/>dolor.</h2>
                        <p className="explaination-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nam in ultrices lorem, vel accumsan sem. Ut gravida et 
                            felis laoreet ultrices.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Explaination;