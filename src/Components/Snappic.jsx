import React from 'react';
import './Snappic.css';
import im from '../images/13.jpg';
import '../index.css';
import { Link } from 'react-router-dom';
import Better from './Better';
import Lider from './Slider';
import ReactSlickDemo from './Tesminals';


const Snappic = () => {
    return (
        <>
            <div className="container-fluid nav_bg mk">
                <div className="row">
                     <div className="col redd">
                        <h6>The Ultimate</h6>
                        <h1>Photo Booth Software</h1>
                        <h6>Snappic provides you with the tools to create unique and memorable experiences for all your customers.</h6>

                        <h6>

                            Our easy-to-use and reliable photo booth software for iPad & iOS offers a multitude of different photo experiences to wow any guest.


                        </h6>
                    </div>

                    <div className="col-6 redd">
                        <img src={im} alt="" height={350} width={400} />

                    </div>

                    

                    

                </div>

                <div className="row">
                    <div className="col-2">
                        
                          
                        <button type="button" className="gf"
                        
                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://events.getsnappic.com/register';
                            }}>Signup</button>


                    </div>
                    <div className="col-2">
                        <button type="button" class="la"

                            onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'https://events.getsnappic.com/register';
                            }}>ComparePackages</button>

                    </div>
                     
                    


                </div>


                <div className="row">
                    <div className="col-6 pag">
                        <h4>See Why 1000s Of Companies In Over 90 Countries Trust Snappic
                            <button type="button" class="f"

                                onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = 'https://events.getsnappic.com/register';
                                }}>Demo</button>
                        </h4>


                    </div>



                </div>

                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-3 re">
                        <h1>Why Snappic?</h1>
                        <br>

                        </br>
                        
                    </div>

                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-5 gg">
                             <h6>Snappic offers a varirty of industry leading features and with our reliable and user-friendly system snappic is without question the best ipad based photo booth app to use at any event</h6>

                        </div>

                    </div>


                </div>

                



            </div>
            <Better />
            <Lider />
            <ReactSlickDemo />





        </>

    )
};

export default Snappic;