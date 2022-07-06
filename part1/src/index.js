import React, { useState } from 'react' //estado
import ReactDOM from 'react-dom'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  
  setTimeout(    
    () => setCounter(counter + 1),    
    1000
  )

  console.log('rendering...', counter)
  
  return (
      <div>{counter}</div>
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