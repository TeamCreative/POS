import React from 'react'

import LineChart from './LineChart'

import './linecharts.css'

function Charts() {
    return (
        <div className="maincharts">
            <div className="chartDiv">
            <LineChart type="bar"/>
            </div>
            <div className="chartDiv">
            <LineChart type="line"/>
            </div>
        </div>
    )
}

export default Charts
