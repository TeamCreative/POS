import React from 'react'

import './sidebaroption.css'

function Sidebarcomponent({ text ,Icon }) {
    return (
        <div className={`sidebarOption`}>
           <Icon/>
           <h2>{text}</h2>
        </div>
    )
}

export default Sidebarcomponent
