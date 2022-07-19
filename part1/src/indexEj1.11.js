import React, { useState } from 'react' //estado
import ReactDOM from 'react-dom'

const Header = ({name}) => <h1>{name}</h1>
const Button = ({handleClick,text}) => (<button onClick={handleClick}> {text} </button>)
const H2 = ({name}) => <h2>{name}</h2>
const Estadisticas =({name, estadistica}) => <p>{name}{estadistica}</p>
const Stats = ({good,bad,neutral}) => {
    if ((good+neutral+bad) === 0){
        return(
            <div>
                <p>No hay feedback disponible</p>
            </div>
        )
    }
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tabla Estadisticas</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td> <Estadisticas name ='Buenas'/> </td>
                    <td> <Estadisticas estadistica={good}/> </td>
                </tr>
                <tr>
                    <td> <Estadisticas name = 'Neutral'/> </td>
                    <td> <Estadisticas estadistica={neutral}/> </td>
                </tr>
                <tr>
                    <td> <Estadisticas name = 'Malas'/> </td>
                    <td> <Estadisticas estadistica={bad}/> </td>
                </tr>
                <tr>
                    <td> <Estadisticas name = 'Promedio Puntuacion'/> </td>
                    <td> <Estadisticas estadistica={((good+(neutral*0)+(bad*-1))/(good+neutral+bad))}/> </td>
                </tr>
                <tr>
                    <td> <Estadisticas name = 'Porcentaje Positivas'/> </td>
                    <td> <Estadisticas estadistica={(good/(good+neutral+bad)*100)+' %'}/> </td>
                </tr>
                </tbody>
            </table>
            {/*
            <Estadisticas name ='Buenas ' estadistica = {good} />
            <Estadisticas name ='Nuetrales ' estadistica = {neutral} /> 
            <Estadisticas name ='Malas ' estadistica = {bad} />
            <Estadisticas name ='Todas ' estadistica = {good+neutral+bad} />
            <Estadisticas name ='Promedio Puntuacion ' estadistica = {((good+(neutral*0)+(bad*-1))/(good+neutral+bad))}/>
            <Estadisticas name ='Porcentaje Positivas ' estadistica = {(good/(good+neutral+bad)*100)+' %'}/>
            */}
        </div>
    )
} 

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    
    const increaseGoodByOne = () => setGood(good + 1)
    const increaseNeutralByOne = () => setNeutral(neutral + 1)
    const increaseBadByOne = () => setBad(bad + 1)
    
    return(
    <div>
        <Header name = "Danos tu opinion" />
        <Button handleClick = {increaseGoodByOne} text = "Buena" />
        <Button handleClick = {increaseNeutralByOne} text = "Neutral" />
        <Button handleClick = {increaseBadByOne} text = "Mala" />
        <H2 name = 'Estadisticas' />
        <Stats good={good} bad={bad} neutral={neutral}  />        
    </div>
    )
}

ReactDOM.render(
    <App />, 
    document.getElementById('root')
)