import React from "react";
import '../index.css';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './features.css';








const Navbar = () => {
 return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row hj">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink
                                    exact className="navbar-brand" to="/">Snappic</NavLink>
                                
                                
                                <div class="dropdown ">
                                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Features
                                 </button>
                                  
                                 
                                 
                                 <ul class="dropdown-menu ty" aria-labelledby="dropdownMenuButton1">
                                     
                                     <div className="row">
                                         <div className="col-8">

                                        
                                     <h6>
                                         ALL PLANS
                                             </h6>
                                        
                                     <p>
                                        
                                                 Select a plan to view included features</p>
                                         </div>

                                         <div className="col-3">
                                             <p>Why Snappic?</p>

                                         </div>
                                     </div>
                                     
                                     
                                     <div className="row">
                                         <div className="col-2">
                                         
                                     
                                     <button class="btn"  type="button" id="hhh" daria-expanded="false">
                                         Pro
                                         <p>Starting out only need basic plans?</p>
                                             </button>
                                         </div>

                                         <div className="col-2 nj">

                                     <button class="btn" type="button" id="h" daria-expanded="false">
                                         Enterprise 
                                         <p>Starting out only need basic plans?</p>
                                             </button>
                                         </div>

                                         <div className="col-2 nj">
                                     
                                     <button class="btn" type="button" id="hhhh" daria-expanded="false">
                                         Enterprise plus
                                         <p>Starting out only need basic plans?</p>
                                             </button>
                                         </div>
                                         <div className="col-1">

                                         </div>
                                         
                                         <div className="col-2">
                                             <button class="btn" type="button" id="or" daria-expanded="false">
                                                 <p id="ws"> Latest changes</p>
                                                 <p>Have a look a latest changes</p>
                                                 
                                             </button>
                                             

                                         </div>
                                         <div className="col-2">
                                             <button class="btn" type="button" id="or" daria-expanded="false">
                                                 <p id="sw">Snappic vs compaterres</p>
                                                 <p>Have a look a latest changes</p>

                                             </button>


                                         </div>

                                         
                                     </div>

                                     <br></br>

                                     <div className="row">
                                         <div className="col-4">
                                             <h5>ADDITIONAL SNAPPIC SOLUTIONS</h5>

                                         </div>
                                         <div className="col-3">

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="or" daria-expanded="false">
                                                 <p id="so">Compare all features</p>
                                                 <p>Take a look at our extensive new features</p>

                                             </button>

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="or" daria-expanded="false">
                                                 <p id="os">VIDEOFX</p>
                                                 <p>See how videoFx is useful for the industry</p>

                                             </button>

                                         </div>
                                     </div>

                                     <div className="row">
                                         <div className="col-2">
                                             <button class="btn" type="button" id="ls" daria-expanded="false">
                                                 <p id="pr">Printer Server</p>
                                                 <p>Fully intergrated wired or wireless solution for mac and windows</p>
                                             </button>
                                         </div>
                                             
                                            
                                            

                                         

                                       
                                             <div className="col-2">
                                                 <button class="btn" type="button" id="ls" daria-expanded="false">
                                                 <p id="pr">SlideShow</p>
                                                 <p>Stream media from your events to an external monitor TV or Projector</p>
                                                 </button>

                                             

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="ls" daria-expanded="false">
                                                 <p id="pr">Sharing Station</p>
                                                 <p>Speed up queues with additional print and ahare stations</p>
                                             </button>



                                         </div>

                                     </div>

                                     <div className="row">
                                         <div className="col-3">
                                             <button class="btn" type="button" id="ls" daria-expanded="false">
                                                 <p id="pr">Virtual booth</p>
                                                 <p>Feasrtures rich virtual booth,No app needed</p>
                                             </button>
                                             

                                         </div>

                                     </div>

                                     <div className="row">
                                         <div className="col-8">

                                             *Slideshow can be added to a Pro event when a microsite add on has been purchased.
                                             Sharing stations can be purchased as an add on to Pro events.

                                         </div>


                                     </div>


                                    
                                  
                                     </ul>
                                
                                
                                 
                             </div>
                             

                             
                                
                                
                             <div class="dropdown ">
                                 <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                     USECASES
                                 </button>
                                 <ul class="dropdown-menu tt" aria-labelledby="dropdownMenuButton1">
                                     <div className="row">
                                         <div className="col-2">
                                             <p>Use Casses</p>
                                             <button class="btn">VIEW all use cases</button>

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="ll" daria-expanded="false">
                                                 <p id="pr">VideoFx</p>
                                                 <p>The new features in the snappic</p>
                                             </button>

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="ll" daria-expanded="false">
                                                 <p id="pr">360 Booth</p>
                                                 <p>Setup your 360 booth with our videoFx functionality</p>
                                             </button>

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="ll" daria-expanded="false">
                                                 <p id="pr">Permanent Installs</p>
                                                 <p>Place your booths in venues for a passive income source</p>
                                             </button>

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="ll" daria-expanded="false">
                                                 <p id="pr">Virtual Booth</p>
                                                 <p>Make use of our virtual booth for those that can not attend in person events</p>
                                             </button>

                                         </div>

                                         <div className="col-2">
                                             <button class="btn" type="button" id="ll" daria-expanded="false">
                                                 <p id="pr">Roaming</p>
                                                 <p>The new features in the snappic</p>
                                             </button>

                                         </div>

                                     </div>
                                        
                                     </ul>

                                 </div>
                                
                                <NavLink
                                 exact className="navbar-brand" to="/">Blog</NavLink>
                             
                             <NavLink
                                 exact visit="./Pricing"className="navbar-brand" to="/Pricing">Pricing</NavLink>
                                
                             
                                
                                <NavLink
                                    exact className="navbar-brand" to="/">Virtual</NavLink>
                                
                                <NavLink
                                    exact className="navbar-brand" to="/">Partners</NavLink>
                                

                                

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                         <button type="button" class="la"

                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href = 'https://events.getsnappic.com/register';
                                             }}>Signup</button>
                                        </li>
                                        
                                        
                                        <li className="nav-item">
                                         <button type="button" className="la"

                                             onClick={(e) => {
                                                 e.preventDefault();
                                                 window.location.href = "https://events.getsnappic.com/login";
                                             }}>Login</button>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
         </div>
         
        
        </>
    )
};

export default Navbar;