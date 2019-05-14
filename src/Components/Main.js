import React from "react";
import styled from "styled-components";
import CalendarContainer from "./Calendar/Container";

class Main extends React.Component {
  render() {
    return (
      <MainComponent>
        <CalendarContainer />
      </MainComponent>
    );
  }
}

export default Main;

const MainComponent = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #eff;
  display: flux;
  align-items: center;
  justify-content: center;
`
