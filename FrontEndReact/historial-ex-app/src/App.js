import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Componetes/Navbar';
import Lista from './Componetes/Lista';
import Form from './Componetes/Form';

function App() {
  const [accion, setAccion] = useState({
    Nombredelaaccion: ''
  });

  const [acciones, setAcciones] = useState([]);

  const [listUpdated, setListUpdated] = useState(false);
  
  //Metodo GET
  useEffect(() => {
    const getAcciones = () => {
      fetch('http://localhost:9002/api')
      .then(res => res.json())
      .then(res => setAcciones(res))
    };
    getAcciones();
    setListUpdated(false)
  }, [listUpdated]);
  
  return (
    <Fragment>
      <Navbar brand='Historial Ex App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <h2 style={{textAlign: 'center'}}>Historial</h2> 
            <Lista accion={accion} setAccion={setAccion} acciones={acciones} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAlign: 'center'}}>Formulario</h2>
            <Form accion={accion} setAccion={setAccion}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
