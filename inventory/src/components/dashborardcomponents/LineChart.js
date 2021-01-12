import React, { Component } from "react";
import Chart from "react-apexcharts";

// css

import './linecharts.css'
// css

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="mainchart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type={this.props.type}
              width="100%"
              height="300"
            />
      </div>
    );
  }
}

export default LineChart;