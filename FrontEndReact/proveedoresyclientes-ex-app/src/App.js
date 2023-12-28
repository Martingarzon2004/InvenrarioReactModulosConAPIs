import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Componetes/Navbar';
import Lista from './Componetes/Lista';
import Form from './Componetes/Form';

function App() {
  const [entidad, setEntidad] = useState({
    Nombre: '',
    Proveedorocliente: '',
    ZonadeBogota: ''
  });

  const [entidades, setEntidades] = useState([]);

  const [listUpdated, setListUpdated] = useState(false);
  
  //Metodo GET
  useEffect(() => {
    const getEntidades = () => {
      fetch('http://localhost:9001/api')
      .then(res => res.json())
      .then(res => setEntidades(res))
    };
    getEntidades();
    setListUpdated(false)
  }, [listUpdated]);
  
  return (
    <Fragment>
      <Navbar brand='Proveedores y Clientes Ex App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <h2 style={{textAlign: 'center'}}>Lista de proveedores y clientes</h2> 
            <Lista entidad={entidad} setEntidad={setEntidad} entidades={entidades} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAlign: 'center'}}>Formulario</h2>
            <Form entidad={entidad} setEntidad={setEntidad}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
