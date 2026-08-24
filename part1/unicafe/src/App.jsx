import {useState} from 'react'
import './App.css'
import {Statistics} from "./component/Statistics.jsx";
import {FEEDBACK_DEFAULT_STATE} from "./constants.js";
import {Anecdotes} from "./component/Anecdotes.jsx";

const App = () => {
    const [state, setState] = useState(FEEDBACK_DEFAULT_STATE)


    const handleClick = (key) => {
        setState((state) => ({...state, [key]: state[key] + 1}))
    }

    return (
        <div>
            <h1>Give feedback</h1>
            {
                Object.keys(FEEDBACK_DEFAULT_STATE).map(key => (
                    <button key={key} onClick={() => handleClick(key)}>{key}</button>
                ))
            }

            <Statistics state={state}/>
            <br/>
            <Anecdotes/>
        </div>
    )
}

export default App