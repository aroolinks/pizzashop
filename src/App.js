import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Header from './components/Header'
import Menu from './components/Menu'
import About from './components/About'
import Navbar from './components/Navbar'
import Shop from  './components/Shop'
import Prices from './components/Prices'
import Clients from './components/Clients'

function App() {
  return (
    <div>
     
      <Router>  
      <Navbar />

        <Switch> 
            <Route path="/" exact>
                <Header />
               <About/>
               <Clients/>
               <Menu/>
               <Shop/>
               <Prices/>
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/menu" exact>
                <Prices/>
                <Shop/>

                  <Menu/>
                </Route>
            </Switch>
      
            </Router>
      
      
    
    </div>
  );
}

export default App;
