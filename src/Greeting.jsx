import { useState } from "react"

const Greeting = ({greeting}) => {
    const [name, setName] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`${greeting}, ${name}`)
        setName('')
    }

    console.log(name)
    return (
        <div>
            <h2>This is the greeting component</h2>
            <form onSubmit={submitHandler}>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Greeting