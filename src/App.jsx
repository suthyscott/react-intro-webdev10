import "./App.css"
import Example from "./Example"
import Button from "./Button"
import Counter from "./Counter"
import Greeting from "./Greeting"

function App() {
    const myName = "Scott"

    const myScore = 15
    const yourScore = 12
    // let winningScore

    // if (myScore > yourScore) {
    //     winningScore = myScore
    // } else {
    //     winningScore = yourScore
    // }

    const giveMeANum = () => {
      return 190
    }

    return (
      <>
        <div>
            <h1>Hello world!</h1>
            <Counter/>
            <Example />
            <p>My name is: {myName}</p>
            {/* <p>The winning score is: {myScore > yourScore ? myScore : yourScore}</p> */}
            {myScore > yourScore ? (
              <p>I had the higher score</p>
            ) : (
              <p>You had the higher score</p>
            )}
            <p>{giveMeANum()}</p>
            <Button message='first button' symbol='!'/>
            <Button message='second button' symbol='%'/>
        </div>
        <Greeting greeting="Bonjour"/>
        <Greeting greeting="Hola"/>
      </>
    )
}

export default App
