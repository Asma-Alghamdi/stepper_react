import React, {Component} from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Navigation from "./components/Navigation";
import UploadPage from "./components/UploadPage";
import Footer from "./components/Footer";




export default class App extends Component{
    
    render(){
        return( <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/UploadPage" exact component={() => <UploadPage />} />
          </Switch>
          <Footer />
        </Router>
  
       
      </div>);
    }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);