import React from "react";
import PropTypes from 'prop-types';

const ViewMenu = function( props ){
  return (
    <select onChange={props.changeView}>
      <option value="Day">Day</option>
      <option selected value="Month">Month</option>
      <option value="Year">Year</option>
    </select>
  );
}

ViewMenu.propTypes = {
  changeView : PropTypes.func.isRequired
}
export default ViewMenu;
