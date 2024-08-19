

const Button = ({message, symbol}) => {
    // const {message, symbol} = props
    // const clickHandler = (e) => {
    //     alert(e.target.value)
    // }
    return (
        <button onClick={() => alert(`you clicked ${message}`)}>{message} {symbol}</button>
    )
}

export default Button