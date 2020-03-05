// MatchList.js

import React, { Component } from "react";
import axios from "axios";
import Match from "./Match";

class MatchList extends Component {
  state = {
    loading: false,
    data: null
  };

  getData = async () => {
    try {
      this.setState({
        loading: true
      });

      const response = await axios.get(
        "https://apiv2.apifootball.com/?action=get_events&from=2020-01-01&to=2020-02-01&league_id=148&APIkey=ca7aa2efd3fe8797d78cd08e184e32a68b328bfc60e52c68d1aaa6b6f78576ca"
      );

      console.log(response.data);
      this.setState({
        data: response.data
      });
    } catch (e) {
      console.error(e);
    }

    this.setState({
      lading: false
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { loading, data } = this.state;
    return (
      <div>
        {loading && (
          <h3 style={{ textAlign: "center" }}>데이터를 불러오는중입니다... </h3>
        )}
        {!loading && data && data.map(d => <Match key={d.match_id} data={d} />)}
      </div>
    );
  }
}

export default MatchList;
