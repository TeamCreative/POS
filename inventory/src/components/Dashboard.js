import React from 'react'
import './dashborad.css'

//dashcompoenents
import Dashnav from './dashborardcomponents/Dashnav'
import Mainname from './dashborardcomponents/Mainname'
import Total from './dashborardcomponents/Total'
import Charts from './dashborardcomponents/Charts'
import Tables from './dashborardcomponents/Tables'
//dashcomponents


function Dashboard() {
    return (
        <div className="dashmain">
            <Dashnav/>
            <Mainname/>
            <Total/>
            <Charts/>
            <Tables/>
        </div>
    )
}

export default Dashboard
