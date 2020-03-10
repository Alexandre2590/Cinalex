import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'
import Home from "./Pages/Home"
import MainNavbar from "./Header/MainNavbar"
import Footer from "../Components/Footer/Footer"
import Test from "./Pages/Test"


function App() {
  return (
    <div className="App">
      <MainNavbar/>
     <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/test" component={Test} />

        {/* <Route path="/countries" component={Countries} />
        <Route path="/add-country" component={AddCountry} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={Secret} /> */}
        <Route render={() => <h2>404</h2>} />
      </Switch>
      <Footer/>
     
    </div>
  );
}

export default withRouter(App);
