import React from 'react';
import '../index.css';
import './Snappic.css';
import './Better.css';
import gh from '../images/16.jpg';
import yu from '../images/14.jpg';
import j from '../images/12.jpg';

const Better = () => {
    
    return (
        <>
            <div className="container">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-3 re"> 
                <h1>Better & Better</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-5 k">
                    <p>Snappic is constantly adding new features to continue to provide you with all you nedd fot successful event</p>
                </div>
                </div>
            
            
            <div className="row">
                <div className="col-2"></div>
                <div className="col-4 bh">
                    <h6>Responding To COVID-19</h6>
                   <h6>  Contactless & Virtual</h6>
                    <p>With the use of a QR code, offer your guests a touchless solution for their in-person events.</p>

                    <p>Easily set up a Virtual Booth to bring your guests together remotely. No app needed.</p>
                    <br></br>
                    <button type="submit" className="la">Seemore</button>

                    </div>
                    
                    <div className="col-6 bh">
                        <img src={gh} alt="" height={300} width={300} />

                    </div>

            </div>

                <div className="row">
                    <div className="col-2"></div>
                    
                        <div className="col-6">
                            <img src={yu} alt="" height={300} width={300} />

                        </div>

                
                <div className="col-3 cr">
                    <h6>Creative Videos</h6>
                    <h5>VideoFX</h5>
                    <h5> Setting you apart from the rest!</h5>

                    <p>Allow your guests to be creative and record powerful videos with Snappic’s VideoFX feature.</p>
                    <br></br>
                    <button type="submit" className="la">Seemore</button>


                </div>
            </div>

            <div className="row">
                <div className="col-3 ls">
                    
                    <h1>Interactive</h1>
                    <h5>Competitions</h5>
                    <p>Scratch-to-Win or Spin-to-Win.</p>
                    <p>Both options provide another engaging and rewarding experience for your guests to enjoy. Set up competition with your next event to increase booth participation.</p>
                    <button type="submit" className="la">Signup</button>

                </div>
                    <div className="col-6">
                        <img src={j} alt="" height={300} width={300} />

                    </div>
                </div>
            </div>



            
        </>
        
    )
};

export default Better;