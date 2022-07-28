import React from 'react'
import ReactDOM from 'react-dom'
//import Note from './components/Note'
import App from './App'
//import axios from 'axios'
/*
axios
  .get('http://localhost:3001/notes')
  .then(response =>{
    const notes = response.data
    ReactDOM.render(
      <App notes={notes} />,
      document.getElementById('root')
    )
  })

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)
*//*
const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true,
  },
]
*/
//const Note = ({ note }) => {  return <li>{note.content}</li>}

//const App = ({notes}) => {
  //const { notes } = props

  //return (
    //<div>
      //<h1>Notes</h1>
      //<ul>
        //{/*<li>{notes[0].content}</li>
        //<li>{notes[1].content}</li>
  //<li>{notes[2].content}</li>*/}
        //{notes.map(note=>(
          //<Note key={note.id} note={note} />
        //))}
      //</ul>
    //</div>
  //)
//}

/*const result = notes.map(note => note.id)
console.log(result)*/

ReactDOM.render(<App/>, document.getElementById('root'))
