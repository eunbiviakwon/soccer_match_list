import React, { Component } from "react";
import Calendar from "./Calendar";
import League from "./League";

class MatchFinder extends Component {
  render() {
    const { setRange } = this.props;

    return (
      <div>
        <League />
        <Calendar setRange={setRange} />
      </div>
    );
  }
}

export default MatchFinder;
