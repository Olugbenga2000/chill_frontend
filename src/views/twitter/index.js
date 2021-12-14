import React from "react";
import './style1.css';

const Home = () =>{
    return(
        <>
            <div className ='twitterContainer'>
                <header>
                    <i className ="fas fa-arrow-left"></i>
                    <h3 className = 'title'>Social Media Verification</h3>
                </header>
                <div className ='twitterBody'>
                    <p>STEP 1 of 3 </p>
                    <div className ='twitterTimeline'>
                        <div className='column'>
                            <i className = "fab fa-twitter first"></i>
                            <span className = 'first'>Twitter</span>
                        </div>
                        <div className='column'>
                            <i className = "fab fa-discord second "></i>
                            <span className = 'second'>Discord</span>
                        </div>
                        <div className='column'>
                            <i className = "fas fa-user-plus third"></i>
                            <span className = 'third'>Verify</span>
                        </div>
                      </div>
                    <div className='btwitter'>
                        <i className = 'fab fa-twitter twitter' ></i>
                    </div>
                    <div className='centerP'>
                        
                    <h3>
                        Sign in with your twitter account for verification
                    </h3>
                    </div>
                    <div className='twitterSigninB'>
                        <i className='fab fa-discord'></i>
                        <h4>Sign in with twitter</h4>
                    </div>
                    <div>
                        <h3 className = 'footer'>NEXT</h3>
                    </div>
                </div>
            </div>
                
        </>
    );
}

export default Home;