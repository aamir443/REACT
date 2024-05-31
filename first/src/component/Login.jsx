import { useEffect, useState } from 'react'
import { useRef } from 'react'

function Login() {
const [userInfo,setUserInfo]=useState({user:"",pass:""})
const userRef=useRef();
useEffect(()=>{
  userRef.current.focus();

  userRef.current.style.color="#ff0000"
},[])
  const ChangeUser=(e)=>{
    const name=e.target.name
    const value=e.target.value
 
  setUserInfo({...userInfo,[name]:value})
}
  return (
    <div>
      <h2> Login Page</h2>

      <form >

        <label htmlFor="user"> Username</label>
        <input placeholder='user Name' ref={userRef} type="text" name='user' value={userInfo.user} onChange={ChangeUser} />
        <label htmlFor="pass"> Username</label>
        <input type="password" name='pass'  value={userInfo.pass} onChange={ChangeUser}/>
        <h2>{userInfo.user}</h2>
        <h2>{userInfo.pass}</h2>
      <button className='btn btn-primary'>create</button>
      </form>
    </div>
  )
}

export default Login