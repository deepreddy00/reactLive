import React, { Component } from 'react';
import Logo from '../images/20.jpg';
import logo1 from '../images/21.jpg';
import logo2 from '../images/22.jpg';
import logo4 from '../images/3.jpg';
import logo5 from '../images/24.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

class Lider extends Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1
        };
        return (
            <div className="containers">
                <Slider {...settings}>
                    <div><img src={Logo} alt=" " /></div>
                    <div><img src={logo1} alt="" /></div>
                    <div><img src={logo2} alt=" " /></div>
                    
                    <div><img src={logo4} alt="" /></div>
                    <div><img src={logo5} alt="" /></div>
                </Slider>

                <div className="row rt">
                    <div className="col-5">

                    </div>
                    <div className="col-3">
                        <button type="submit" className="j">SIGN UP</button>

                    </div>
                    <div className="col-4">

                    </div>
                    

                </div>
            </div>

            
        );
    }
}

export default Lider;

