import React from "react";
import dateFns from "date-fns";
import styled from "styled-components";
import Calendar from "./CalendarContainer";
import ViewMenu from './ViewMenu';

class CalendarContainer extends React.Component {
  constructor(props) {
    super(props)

    const now = new Date();
    const startOfMonth = dateFns.startOfMonth(now);
    const startOfCalendar = dateFns.startOfWeek(startOfMonth);

    this.state = { now, startOfMonth, startOfCalendar, view: 'Month' }
  }
  changeView = (event) => {
    console.log(this.state.view, event.target.value);
    this.setState({ view: event.target.value });
  }
  render() {
    return (
      <MainContainer>
        <ViewMenu changeView={ this.changeView }/>
        <div>{dateFns.format(this.state.now, 'MM/DD/YYYY')}</div>
        <div>{dateFns.format(this.state.startOfMonth, 'MM/DD/YYYY')}</div>
        <div>{dateFns.format(this.state.startOfCalendar, 'MM/DD/YYYY')}</div>
        <div>{this.state.view}</div>
        <Calendar startDate={this.state.startOfCalendar} view={this.state.view}/>
      </MainContainer>
    );
  }
}

export default CalendarContainer;

const MainContainer = styled.div`
  height: 75vh;
  width: 80vw;
  background-color: #fff;
`
