
import React,{useState} from 'react'

import './roster.css';
import { useSelector, useDispatch } from "react-redux";
//calandar

//calendar
  export  function Rosters({ Mon,Tue, Wed}) {
  
  const [monday, setMonday] = useState(Mon)
  const [tuesday, setTuesday] = useState(Tue)
  const [wednesday, setWednesday] = useState(Wed)
  


  return (
    <tr>
    <td><input  value ={monday}  onChange={e =>{setMonday(e.target.value) }}/></td>
    <td><input  value ={tuesday}  onChange={e =>{setTuesday(e.target.value)}}/></td>
    <td><input  value ={wednesday}  onChange={e =>{setWednesday(e.target.value)}}/></td>
  </tr>
  )
}


function Roster() {
  const h = useSelector((state) => state.cart);
  const [data, setData] = useState(h)
    return (
        <div className="rostermain">
            
            <table>
  <tr>
  <th>Monday</th>
    <th>Tuesday</th>
    <th>Wednesday</th>
  </tr>
  {data.map(e => <Rosters id={e.id} name={e.name} data={data} Mon ={e.Monday} Tue={e.Tuesday} Wed={e.Wednesday} /> )}
</table>



        </div>
    )
}

export default Roster
