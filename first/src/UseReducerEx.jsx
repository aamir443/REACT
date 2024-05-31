import {useReducer} from 'react'

const UseReducerEx = () => {
    const initstate={color:"000000",size: "30px"};
    const reducer=(state,action)=>{
        switch(action){
            case "red":
                return {...state,color:"#ff0000"};
                case "green":
                    return {...state,color:"#00ff00"};
                    case "blue":
                        return {...state,color:"#0000ff"};
                        default:
                            return state;
        }

    }
    const [state,dispatch]=useReducer(reducer,initstate);
  return (
    <div>
    <h1>Usereducer Example</h1>
    <h2 style={{color:state.color}}>MCA REACT CLASSES</h2>
    <button className='btn btn-primary' onClick={()=> dispatch("red")}>red</button>
    <button className='btn btn-primary' onClick={()=> dispatch("green")}>green</button>
    <button className='btn btn-primary' onClick={()=> dispatch("blue")}>blue</button>
    </div>  
  )
}

export default UseReducerEx