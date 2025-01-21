import React, { useReducer } from 'react'

const BestPracticeUseReducer = () => {

    const initialState = {
        count : 0,
        inc : 2,
        dec : 2
    }

    const reducer = (state, action) => {
        // if(action.type === "Inc") return state + 1;
        // if(action.type === "Dec") return state - 1;
        // if(action.type === "Reset") return 0;

        switch(action.type){
            case "Inc":
                return { ...state, count : state.count + state.inc}
                break
            case "Dec":
                return { ...state, count : state.count - state.dec}
                break
            case "Reset":
                return { ...state, count : 0}
                break
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div className='main-div'>
            <h1 className="my-8 text-5xl font-bold">UseReducer In React</h1>
            <hr />
            <p className="my-8 text-3xl font-bold">{state.count}</p>
            <button onClick={()=> dispatch({type : "Inc"})} className='me-10'>
                Increment
            </button>
            <button onClick={()=> dispatch({type : "Reset"})} className='mx-5'>
                Reset
            </button>
            <button onClick={()=> dispatch({type : "Dec"})} className='ms-10'>
                Decrement
            </button>
        </div>
    )
}

export default BestPracticeUseReducer