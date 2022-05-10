import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';

function App() {
  //     el valor, funcion para actualizarlo
  //     
  //let [sabor, setActualizaSabor] = useState("mango");
  let [theme, setTheme] = useState('light')

  const [isValid, setIsValid] = useState(true);

  const handleIsValid = (event) => {
    if (event.target.value.length > 4) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }
  const name = ""; 
  return (
    <div className={"App " + theme} >


      <Counter />

      <select onChange={event => {
        console.log(event.target.value)
        setTheme(event.target.value)
      }}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <input placeholder='Contrasena' className={isValid === true ? 'isValid' : "error"} onChange={(event) => handleIsValid(event)} />


      {/* <button onClick={() => setActualizaSabor("fresa")}>Fresa</button>
      <button onClick={() => setActualizaSabor("pina")}>Pina</button>
      <button onClick={() => setActualizaSabor("uva")}>Uva</button>
      <button onClick={() => setActualizaSabor("mango")}>MANGO</button>
      <h3>{sabor}</h3> */}

      {/* {mostrar === true ? <div>Mostrar datos</div> : <div>Actualizar datos</div>} */}

      {/* if(){

      }else if(){

      }else{

      } */}

      {/* {
        sabor === "mango" ? <div className='mango'>Tommy <img src='https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' /></div>
          : sabor === "fresa" ? <div className='fresa' >Rosita fresita<img src='https://images.unsplash.com/photo-1624160719183-b3b9010a77c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='fresa' /></div>
            : sabor === "pina" ? <div className='pina'>Fanta <img src="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTxG-_2efaYIcOJASTIGrenmnC80HhHCwJ6jkcY_JFAZa3meg6ihZqodcDgnCUEkdlnK3lbEXNo5_8nu8kVSlU" alt="a" /></div>
              : sabor === "uva" ? <div className='uva'>Jarrito<img src="https://images.unsplash.com/photo-1632576883732-f131be0be48a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHV2YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="uva" /></div>
                : <div></div>
      }
 */}

      { name ? <h1>Hello {name}</h1> : <div></div>}
      { name && <h1>Hello {name}</h1> }
    </div>
  );
}

export default App;
