import React, { useContext } from 'react'
import C from './C'
import { nameContext } from './UseContext'


function B() {
const Name=useContext(nameContext)
    return (
    <div>
        <h2>B component</h2>
        <h3>{Name[1]}</h3>
        <C/>
      
    </div>
  )
}

export default B