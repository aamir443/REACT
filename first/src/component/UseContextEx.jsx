import React from 'react'
import A from '.component/A'
export const nameContext= React.createContext();
function UseContextEx() {
  return (
    <>
        <h1 className='text-center'>USe Context Hook</h1>
        <nameContext.Provider value={["kiet","satyam"]}>
    <A/>
            </nameContext.Provider>   
      
 </>
  )
}

export default UseContextEx