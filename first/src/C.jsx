import React, { useContext } from 'react'
import { nameContext } from './UseContext'

function C() {
    const Name=useContext(nameContext)

  return (
    <div>
      <h2>C component</h2>
      <h2>name:{Name[0]}</h2>
      <h2>name:{Name[1]}</h2>
    </div>
  )
}

export default C