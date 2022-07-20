import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => (<button onClick={handleClick}> {text} </button>)

const App = (props) => {

    const otraAnecdota = () => setSelected({...selected, posicion : Math.floor(Math.random() * anecdotes.length)})
    //const votarAnecdota = () => setSelected({...selected, votos : copy[selected.posicion]+=1})
    const [selected, setSelected] = useState({
        posicion : 0,
        votos : [0,0,0,0,0,0]
    })
    let copy = [...selected.votos]  
    return (
    <div>
      <p>{props.anecdotes[selected.posicion]}</p>
      {/*<p>votos: {copy[selected.posicion]} </p>
      <Button handleClick={votarAnecdota} text='Votar'/>*/}
      <Button handleClick={otraAnecdota} text='Andecota Random'/>
      {console.log(copy[selected.posicion])}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)