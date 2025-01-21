import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (state, action) => {
        if(action.type === "Inc") return state + 1;
        if(action.type === "Dec") return state - 1;
    }

    const [count, dispatch] = useReducer(reducer, 0);


    return (
        <div className='main-div'>
            <h1 className="my-8 text-5xl font-bold">UseReducer In React</h1>
            <hr />
            <p className="my-8 text-3xl font-bold">{count}</p>
            <button onClick={()=> dispatch({type : "Inc"})} className='me-10'>
                Increment
            </button>
            <button onClick={()=> dispatch({type : "Dec"})} className='ms-10'>
                Decrement
            </button>
        </div>
    )
}

export default UseReducer
