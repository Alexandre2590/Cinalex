import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./Pages/Home";
import MainNavbar from "./Header/MainNavbar";
import Footer from "../Components/Footer/Footer";
import Test from "./Pages/Test";
import Test2 from "./Pages/Test2";
import Test3 from "./Pages/Test3";
import Documentation from "./Pages/Documentation/Documentation"
import Simulateur from "./Pages/Simulateur/Simulateur"




function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/documentation" exact component={Documentation} />
        <Route path="/simulateur" component={Simulateur} />
        <Route path="/test" component={Test} />
        <Route path="/test2" component={Test2} />
        <Route path="/test3" component={Test3} />



        {/* <Route path="/countries" component={Countries} />
        <Route path="/add-country" component={AddCountry} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/secret" component={Secret} /> */}
        <Route render={() => <h2>404</h2>} />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
