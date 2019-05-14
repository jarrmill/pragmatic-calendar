import React from "react";
import dateFns from "date-fns";
import styled from "styled-components";

class Container extends React.Component {
  constructor(props) {
    super(props)

    const now = new Date();
    const startOfMonth = dateFns.startOfMonth(now);
    const startOfCalendar = dateFns.startOfWeek(startOfMonth);

    this.state = { now, startOfMonth, startOfCalendar }
  }
  render() {
    return (
      <MainContainer>
        <div>{dateFns.format(this.state.now, 'MM/DD/YYYY')}</div>
        <div>{dateFns.format(this.state.startOfMonth, 'MM/DD/YYYY')}</div>
        <div>{dateFns.format(this.state.startOfCalendar, 'MM/DD/YYYY')}</div>
      </MainContainer>
    );
  }
}

export default Container;

const MainContainer = styled.div`
  height: 75vh;
  width: 50vw;
  background-color: #fff;
`
