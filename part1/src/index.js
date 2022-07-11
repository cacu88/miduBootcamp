import React, { useState } from 'react' //estado
import ReactDOM from 'react-dom'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  /*  
  setTimeout(    
    () => setCounter(counter + 1),    
    1000
  )

  console.log('rendering...', counter)
  */ //componente estado

  //const handleClick = () => {    
  //  console.log('clicked')  
  //}

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick ={increaseByOne} text="Plus"/>
      <Button handleClick ={decreaseByOne} text="Minus"/>
      <Button handleClick ={setToZero} text="Zero"/>
      {/*<button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero      
  </button>*/}
    </div>
    )
}
  
ReactDOM.render(
    <App />, 
    document.getElementById('root')
)

  /*
  let counter = 1
  const refresh = () => {
    ReactDOM.render(<App counter={counter} />, 
    document.getElementById('root'))
  }
  
  setInterval(() => {
    refresh()
    counter += 1
  }, 1000)
  */