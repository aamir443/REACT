import  { useEffect, useState } from 'react'

const Counter = () => {
    const [count , setCount]= useState(0);
    const checkValue=()=>{
        return count===0? "Zero":count;
    }

    const checkCounter=()=>{
        return count===0? " badge bg-warning m-3 p-3":" badge bg-danger m-3 p-3"
    }
   

    const countIncreament=()=>{
         setCount(count+1);
        
    }
    const countDecreament=()=>{
       setCount(count -1);
       
        
    }
    const resetCount = () => {
        setCount(0);}

    useEffect(()=>
    {
        console.log(count)
    },
    [count])


  return (
    <div className='container mt-3'>
        <button className='btn btn-primary'onClick={countIncreament}>Increament</button> 
        {/* In event calling we pass an address to run the code
        In function we call a function() just like this */}

        <span className={checkCounter()}>{checkValue()}</span>

        <button className='btn btn-warning 'onClick={countDecreament}>Decrament</button>
        <button className='btn btn-danger 'onClick={resetCount}>Restart</button>
        </div>
  )
}

export default Counter



