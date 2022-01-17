import React from "react";
import "./index.css";
import styled from "styled-components";
import { Navbar , HomeSection } from "./components";
import { BrowserRouter as Route , Router , Switch } from "react-router-dom"


const App = () => {
  return (
    <AppWrapper className="app">
      <Route>
        <Switch>
         
          <Router exact path="/">
            <Navbar />
            <HomeSection />
          </Router>
          
          <Router path="/features">
            featuress
          </Router>
        </Switch>
        
      </Route>
    </AppWrapper>
  );
}


export default App ;


const AppWrapper = styled.main``;