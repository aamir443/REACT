import { useState } from "react"


const ChangeName = (props) => {
    let {sname}=props;
    const[name,setName]=useState(sname)
  return (
    <div className="container mt-3">
    <div>{name}</div>
    <button className="btn btn-warning" onClick={()=>setName("C")}>Change Name</button>
    </div>
  )
}

export default ChangeName