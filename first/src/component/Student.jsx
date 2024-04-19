
import {useState} from "react";
const Student = () => {
    const[studentInfo,stStudentInfo]=useState([
        {std: "1", sname:"Student1", marks:"10"},
        {std: "2", sname:"Student2", marks:"20"},
        {std: "3", sname:"Student3", marks:"30"},
        {std: "4", sname:"Student4", marks:"40"},
    ]);
  return (
    <div>{param.name?Find((studentInfo)=> studentInfo.sname===param.name): JSON.stringify{studentInfo}}</div>
  )
}

export default Student