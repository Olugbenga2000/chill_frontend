import React from "react";
import './style.css';

const home = () => {

    return (
        <>
             <div className='verifiedContainer'>
                <header>
                    <i className="fas fa-arrow-left"></i>
                    <h3 class = 'title'>Social Media Verification</h3>                    
                </header>
                <div className='verifyBody'>
                    <p>STEP 3 of 3 </p>
                    <div className='verifyTimeline'>
                        <div className='columnV'>
                            <i className = "fab fa-twitter first"></i>
                            <span className = 'first'>Twitter</span>
                        </div>
                        <div className='columnV'>
                            <i className = "fab fa-discord second "></i>
                            <span className = 'second'>Discord</span>
                        </div>
                        <div className='columnV'>
                            <i className = "fas fa-user-plus third"></i>
                            <span className = 'third'>Verify</span>
                        </div>
                    </div>           
                    <div className='body'>
                        <h2>Tap button below for final verification</h2>
                    </div>
                    <div className='verifySigninB'>
                        <h4>FINISH VERIFICATION</h4>
                                    
                    </div>
                    </div>
            </div>
        </>

    )
}

export default home;