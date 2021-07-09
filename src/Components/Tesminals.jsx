import React from "react";
import Slider from "react-slick";
import './Tesminals.css';

class ReactSlickDemo extends React.Component {
    render() {
        var settings = {
            dots: true
        };
        return (
            <div className="containerd">
                
                <div className="row">
                    
                    <div className="col-5"></div>
                    <div className="col-3">
                        <p>What Our Clients Think</p>
                        <h1>Testimonials</h1>

                    </div>

                </div>
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-6">

                   
                <Slider {...settings}>
                    <div>
                        <p>
                            "i love sanppic for being in my life djhkjkjkasklsa dcsasddasasdhjbsajbnnjk`njkax jhkdsnkxhjdsajjknxjkncznjknjkxcnjknjkcx "

                        </p>
                        <p>
                            --Reddy
                        </p>
                    </div>
                    <div>
                        <p>
                            "i love sanppic for being in my life efdihuajknnjkdahjjnbdsajkncxjnk jkjknkdjnjkn "

                        </p>
                        <p>
                            Reddy
                        </p>
                    </div>
                    <div>
                        <p>
                            "i love sanppic for being in my life djhaksnnjmxcznmnjkn jknkjnjkjk jk"

                        </p>
                        <p>
                            Reddy
                        </p>
                    </div>
                    <div>
                        <p>
                            "i love sanppic for being in my life uhidjachjxzbhj  hbjbhjhj jknkjnknj "

                        </p>
                        <p>
                            Reddy
                        </p>
                    </div>
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }
}

export default ReactSlickDemo;
