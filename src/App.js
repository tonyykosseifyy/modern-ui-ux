import React from "react";
import "./index.css";
import styled from "styled-components";
import { Navbar } from "./components";

const App = () => {
  return (
    <AppWrapper className="app">
      <Navbar />
    </AppWrapper>
  );
}


export default App ;


const AppWrapper = styled.main``;