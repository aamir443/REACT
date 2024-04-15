// import React from 'react'

 const Languages=() => {
    let lang = [
      { id: 1, name:"java"},
      { id: 1, name:"javascript"},
      { id: 1, name:"kotlin"},
      { id: 1, name:"python"},
      { id: 1, name:"c"},
    ];
  return (

   
    <div>
    <h1 className="bg-warning">Programming languages</h1>
    <ul>
    {
        lang.map((item)=>(
        <li key={item.id}>{item.name}</li>
    ))}
        </ul>
    </div>
  )
}

export default  Languages
