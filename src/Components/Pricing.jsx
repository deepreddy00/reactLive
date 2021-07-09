import React,{useState} from "react";
import '../index.css';
import { Link } from "react-router-dom";


const Pricing = () => {

    const [pro, setPro] = useState("$19");
    const [hu, Sethu] = useState("$69");
    const[bh,setbh]=useState("N/A")

    const fgh = () =>
    {
        let number = "$69";
        let number1 = "$169";
        let number2 = "contactus";
        setPro(number);
        Sethu(number1);
        setbh(number2);
        

    }
    
    const ghf = () =>
    {
        let number = "$169";
        let number1 = "$1599";
        let number2 = "contactus";
        setPro(number);
        Sethu(number1);
        setbh(number2);
        
        }

   


    
        return (
            <>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-4"></div>
                        

                    

                        <div className="col-8 ">

           
                            <h1 className="pri" >Photo Booth Software Pricing</h1>
                            <h6 className="hnj">Find The Plan That Works For You</h6>
                        </div>
                    
                    </div>

                    <div className="row ">
                        <div className="col-4">

                        </div>
                        <div className="col-5 pri">
                            <button type="button"  className="la">
                                PerEvent

                            </button>
                            <button type="button"
                                
                                
                                
                                
                                className="la">
                                PerMonth

                            </button>
                            <button type="button" className="la">
                                PerYear

                            </button>

                            <p>The #1 iOS-based photo booth solution</p>


                        </div>

                    </div>


                    <div className="row">
                        <div className="col-4">

                        </div>
                        <div className="col-2 er">
                            <h4 className="text-center">Pro</h4>
                            <h3 className="text-center">$19</h3>
                            <h6 className="text-center">

                                <span>&#10003;</span>
                                Still, GIF & Burst</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span> Basic Customization</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>Sharing</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>Basic Enhancements</h6>

                        </div>

                        <div className="col-2 rs">

                            <h4 className="text-center">Enterprise</h4>
                            <h3 className="text-center">$69</h3>
                            <h6 className="text-center">

                                <span>&#10003;</span>
                                All Pro Features</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>Advanced Customization</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>Advanced Analytics</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>Green Screen</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>Surveys</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>1 Sharing Station License</h6>
                            <h6 className="text-center">
                                <span>&#10003;</span>VideoFX</h6>


                        </div>

                    </div>


                    


                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-8 pss">
                            <h5 className="text-center">Trusted By Some Of The Biggest Names In The Industry</h5>

                        </div>
                    
                    </div>


                
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-5">
                            <h1 className="pri">Photo Booth Pricing Plans</h1>
                            <p>Select between Per event, Monthly or Annual</p>

                        </div>

                    </div>


                    <div className="row" id="o">
                        <div className="col-2">

                        </div>
                        <div className="col-3">
                            <div class="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="bu" data-bs-toggle="dropdown" aria-expanded="false">
                                    Per_Event
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li onClick={fgh}><Link class="dropdown-item" to="#">Per_month</Link></li>
                                    <li onClick={ghf}><Link class="dropdown-item" to="#">Per_Year</Link></li>
                                
                                </ul>
                            </div>
                        </div>

                        
                        <div className="col-1">
                            <h1 className="ko">Pro</h1>
                            <p>{ pro}</p>
                        </div>
                        <div className="col-2">
                            <h1 className="k2">Enterprise</h1>
                            <p>{ hu}</p>
                        
                        </div>
                        <div className="col-2">
                            <h1 className="k1">Enterprise+</h1>
                            <p>{ bh}</p>

                        </div>

                    </div>
                


                    <div className="row" id="o">
                        <div className="col-2">

                        </div>
                        <div className="col-10">
                            Licenses
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Photo Booth License</th>
                                        <th scope="col">1 License</th>
                                        <th scope="col">1 License</th>
                                        <th scope="col">1 License</th>
                                    
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Sharing Station License</th>
                                        <td>1 License</td>
                                        <td>$39</td>
                                        <td>Contact us</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Additional License</th>
                                        <td>1 License</td>
                                        <td>$29</td>
                                        <td>Contact us</td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </div>

                    </div>





                    <div className="row" id="o">
                        <div className="col-2">

                        </div>
                        <div className="col-10">
                            Experiences
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Still</th>
                                        <th scope="col"><span className="dot"></span></th>
                                        <th scope="col"><span className="dot"></span></th>
                                        <th scope="col"><span className="dot"></span></th>
                                    

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">GIF</th>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bursts(Boomerang)</th>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Basic Video</th>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>
                                    </tr>

                                    <tr>
                                        <th scope="row">VideoFx</th>
                                        <td><span className="dot"></span></td>
                                        <td><span className="dot"></span></td>


                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>


                    <div className="row">
                        <div className="col-4">

                        </div>

                        <div className="col-4">
                            <h3> Which Package Is Right For You?</h3>


                        </div>

                    </div>

                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col-2">
                            <h1 className="ol text-center">pro
                        
                                <div className="row">
                                    <div className="col-2">
                                        <button className="kk">Find out more</button>

                                    </div>
                                
                                

                                </div>
                            </h1>
                        

                        </div>
                        <div className="col-2">
                            <h1 className="o1">Enterprice
                        
                                <div className="row">
                                    <div className="col-2">
                                        <button className="b1">Find out more</button>

                                    </div>



                                </div>
                            </h1>

                        </div>
                        <div className="col-3">
                            <h1 className="o2">Enterprice+
                        
                                <div className="row">
                                    <div className="col-2">
                                        <button className="b2">Find out more</button>

                                    </div>



                                </div>
                            </h1>

                        </div>

                    </div>

                    <div className="row" id="o">
                        <div className="col-2">

                        </div>

                        <div className="col-7 pop">
                            <p className="con">Contact us and See
                                how Snappic benfints us for you
                                <button type="submit" className="mm">Contact us</button>
                            </p>
                        
                        

                        </div>

                    </div>


                </div>
           


                
            
            
            
            
            
            
            
            
            </>
        )
    
}
export default Pricing;