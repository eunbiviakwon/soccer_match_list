import React, { Component } from "react";
import MatchTemplate from "./MatchTemplate/MatchTemplate";
import MatchFinder from "./MatchFinder";
import Match from "./Match";
import dateFormatter from "../utils/dateFormatter";

class App extends Component {
  state = {
    range: {
      startDate: "2020-01-01",
      endDate: "2020-02-01"
    }
  };

  handleRange = range => {
    const startDate = dateFormatter(range[0]);
    const endDate = dateFormatter(range[1]);

    this.setState({
      range: {
        startDate,
        endDate
      }
    });
  };

  render() {
    return (
      <div>
        <MatchTemplate header={<MatchFinder setRange={this.handleRange} />}>
          <Match />
        </MatchTemplate>
      </div>
    );
  }
}

export default App;
