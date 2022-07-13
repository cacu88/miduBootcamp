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
  /*const byOneIncDec = () => {
    if (Button(text == 'Plus')) {
      setCounter(counter + 1)
    }else if (Button(text == 'Minus')){
      setCounter(counter - 1)
    }else if (Button(text == 'Zero')){
      setCounter(0)
    }
  }*/
  
  const isEven = counter % 2 === 0
  const mensajeParT = isEven ?  'es par' : 'es impar' //ternarias (se recomienda usar)
  let mensajePar = ''
  if (isEven){
    mensajePar = "Es Par"
  } else {
    mensajePar = "Es Impar"
  }

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick ={increaseByOne} text='Plus'/>
      <Button handleClick ={decreaseByOne} text='Minus'/>
      <Button handleClick ={setToZero} text='Zero'/>
      <p>{mensajeParT}</p> {/* renderizado condicional (ternarias)*/}
      <p>{mensajePar}</p>
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