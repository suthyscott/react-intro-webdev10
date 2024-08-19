import { useState } from "react"
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    // const incrementCount = () => {
    //     // state manipulation
    //     setCount()
    // }
    
    // console.log(count)
    return (
        <div id="counter">
            {count}
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button>Button</button>
        </div>
    )
}

export default Counter