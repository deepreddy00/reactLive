import React from 'react';
import { NavLink } from "react-router-dom";
import './butto.css'

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">


                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="mt-3 butto">
                                        <NavLink to={props.visit} className="btn-get-started">
                                            {props.btname}
                                        </NavLink>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Common;