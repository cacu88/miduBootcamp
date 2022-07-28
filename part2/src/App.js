import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [countries, setCountries] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [Filter, setFilter] = useState('')
  const hookPersons = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
      setPersons(response.data)
      })
  }
  const hookCountries = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
      setCountries(response.data)
      })
  }
  
  useEffect(hookPersons, [])
  useEffect(hookCountries, [])
  //console.log({countries})

  const handleNameChange = (event) => {
    //console.log(event.target.value)  
    setNewName(event.target.value)  
  }
  const handleNumChange = (event) => {
    //console.log(event.target.value)  
    setNewNumber(event.target.value)  
  }
  const handleFilterChange = (event) => {
    //console.log(event.target.value)  
    setFilter(event.target.value)  
  }

  const addPerson = (event) => {
    event.preventDefault()
    //console.log('button clicked', event.target) 
    const personObject = {
      name: newName,
      number: newNumber
    }
    if((persons.map(person => person.name)).includes(personObject.name)){
      window.alert(`${newName} is already in the phonebook`)
      //console.log(personObject.name)
    }else{
    setPersons([...persons, personObject]) //spread operator
    setNewName('')
    setNewNumber('')} 
  }
  const filtro = countries.filter(country =>
    country.name.common.toLowerCase().includes(Filter.toLowerCase()))
  return (
    <div>
      <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleFilterChange} /></div>
      <h3>Add new</h3>
      <form onSubmit={addPerson}>
        <div> name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h3>Numbers</h3>
      <ul>{persons.filter(item =>
        item.name.toLowerCase().includes(Filter.toLowerCase())).map(item => 
          <li key={item.name}> {item.name} {item.number}</li>)}
      </ul>
      </div>
      <div>
      <h1>Countries</h1>
      <div>Find countries<input onChange={handleFilterChange} /></div>
      <div>
        <ul>
        {(filtro.length > 10)?<p>too many matches, specify filter</p>: filtro.map(pais => <li key={pais.name.common}>{pais.name.common}</li>)
          }
        </ul>
      </div>
      </div>
    </div>
  )
}

export default App