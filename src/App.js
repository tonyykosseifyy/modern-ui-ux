import React from "react";
import "./index.css";
import styled from "styled-components";
import { Navbar , HomeSection } from "./components";



const App = () => {
  return (
    <AppWrapper className="app">
      <Navbar />
      <HomeSection />
    </AppWrapper>
  );
}


export default App ;


const AppWrapper = styled.main``;