import React, { useContext } from 'react'
import B from './B'
import { nameContext } from './UseContextEx';
import UseContextEx from './component/UseContextEx';

function A() {
  const Name=UseContextEx(nameContext)

  return (
    <div>
      <h2>A componet</h2>
      <B Name={Name}/>
    </div>
  )
}

export default A;