import React, { useState } from 'react' //estado
import ReactDOM from 'react-dom'

const NoSeUsaAdvertencia = () => {
    return <h1>'Todavia no se ha usado el contador'</h1>
}

const ClickHistory = ({counterc}) =>{
    console.log({counterc})
    return(<p>{counterc.join(', ')}</p>)
}

const App = () => {
    //const [left, setLeft] = useState(0)
    //const [right, setRight] = useState(0) //esta forma es mejor (estado mas atomico)
    const [clicks, updateClicks] = useState({
        left : 0, 
        right : 0,
        counter : 0, //siempre que puedas no tengas en el estado algo que puedas calcular
        mensaje : "Mensaje en el estado"
    }) // forma mas compleja. Objeto.

    const[counterc, setCounterc] = useState([]) //estado complejo matriz

    const handleLeftClick = () =>{
        const newClicks = {
            ...clicks, //spread opertor. Se guardan propiedades del objeto previas y se sobrescriben con las siguientes
            left: clicks.left + 1,
            counter: clicks.counter + 1
            //right: clicks.right //ya no tiene sentido se recuper en ...clicks
        }
        updateClicks(newClicks)
        setCounterc (prevCounter =>{
            return prevCounter.concat('L')
        })
    }

    const handleRightClick = () => {
        updateClicks ({ 
        ...clicks,
          //left: clicks.left, 
          right: clicks.right + 1,
          counter: clicks.counter + 1 
        })
        setCounterc(prevCounter=>([...prevCounter, 'R']))
      }
  
    return (
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}> left </button>
        <button onClick={handleRightClick}> right </button>
        {clicks.right}
        <p>Clicks Totales: {clicks.counter}</p>
        <p>{clicks.mensaje}</p>
        <p>{counterc.join(', ')}</p>
        <p>{counterc.length.toString()}</p>
        {counterc.length === 0 ? (<NoSeUsaAdvertencia/>
        ) : (<ClickHistory counterc ={counterc}/>)}
      </div>
    )
  }

  ReactDOM.render(
    <App />, 
    document.getElementById('root')
)