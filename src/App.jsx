import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import './index.css';
import { Switch, Route,Redirect } from "react-router-dom";
import Navbar from './Components/Narbar';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing.jsx';
import Snappic from './Components/Snappic';



const App = () => {
  return (
    <>
     <Navbar/>
      <Switch>
        <Route exact path="/" component={Snappic} />
        <Route exact path="/Pricing" component={ Pricing}/>

      </Switch>
      <Footer/>
     
       
    </>
  )

};

export default App;

