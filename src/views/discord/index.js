import React from "react";
import './style.css';

const Home = () =>{
    return(
        <>
         <div className='discordContainer'>
                <header>
                    <i className="fas fa-arrow-left"></i>
                    <h3 class = 'title'>Social Media Verification</h3>                    
                </header>
                <div className='discordBody'>
                    <p>STEP 2 of 3 </p>
                    <div className='discordTimeline'>
                        <div className='columnD'>
                            <i className = "fab fa-twitter first"></i>
                            <span className = 'first'>Twitter</span>
                        </div>
                        <div className='columnD'>
                            <i className = "fab fa-discord second "></i>
                            <span className = 'second'>Discord</span>
                        </div>
                        <div className='columnD'>
                            <i className = "fas fa-user-plus third"></i>
                            <span className = 'third'>Verify</span>
                        </div>
                      </div>
                    <div className='bdiscord'>
                        <i className = 'fab fa-discord discord' ></i>
                    </div>
                    <div className='dcenterP'>
                        
                    <h3>
                        Sign in with your discord account for verification
                    </h3>
                    </div>
                    <div className='discordSigninB'>
                        <i className='fab fa-discord'></i>
                        <h4>Sign in with Discord</h4>
                    </div>
                    <div>
                        <h3 className = 'dfooter'>NEXT</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;