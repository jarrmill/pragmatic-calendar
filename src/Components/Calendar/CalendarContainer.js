import React from "react";
import dateFns from "date-fns";
import styled from "styled-components";
import PropTypes from 'prop-types';

class CalendarContainer extends React.Component {
  renderView = () => {
    if ( this.props.view === 'Day' ) {
        return (
          <div>
             { this.renderDayView() }
          </div>
        )
    } else if ( this.props.view === 'Month' ) {
      return (
        <MonthContainer>
          { this.renderMonthView() }
        </MonthContainer>
      );
    } else {
      return (
        <div>
          <div>YearView </div>
        </div>
      )
    }
  }
  renderDayView = () => {
    var date = this.props.startDate;
    return <div>{dateFns.format(date, "MMM Do")}</div>
  }
  renderMonthView = () => {
    var beginningDate = this.props.startDate;
    var endDate = dateFns.addDays(beginningDate, 34);
    var dateRange = dateFns.eachDay(beginningDate, endDate);

    return dateRange.map((date) => {
      return this.renderDateTile(dateFns.format(date, "MMM Do"));
    })
  }
  renderDateTile = (date) => {
    return <DayContainer key={date}>{date}</DayContainer>
  }
  render() {
    return this.renderView();
  }
}
CalendarContainer.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  view: PropTypes.string
}
export default CalendarContainer;

const MonthContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ead;
`
const DayContainer = styled.div`
  width: 13%;
  border: 1px solid black;
  background: white;

  :hover {
    background-color: #aff;
  }
`
