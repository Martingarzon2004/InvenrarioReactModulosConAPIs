import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Componetes/Navbar';
import Lista from './Componetes/Lista';
import Form from './Componetes/Form';

function App() {
  const [usuario, setUsuario] = useState({
    Nombre: '',
    Clavedeacceso: '',
    Clavedeautenticacion: ''
  });

  const [usuarios, setUsuarios] = useState([]);

  const [listUpdated, setListUpdated] = useState(false);
  
  //Metodo GET
  useEffect(() => {
    const getUsuarios = () => {
      fetch('http://localhost:9003/api')
      .then(res => res.json())
      .then(res => setUsuarios(res))
    };
    getUsuarios();
    setListUpdated(false)
  }, [listUpdated]);
  
  return (
    <Fragment>
      <Navbar brand='Ingreso de Usuarios Ex App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <h2 style={{textAlign: 'center'}}>Lista de Usuarios</h2> 
            <Lista usuario={usuario} setUsuario={setUsuario} usuarios={usuarios} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAlign: 'center'}}>Formulario</h2>
            <Form usuario={usuario} setUsuario={setUsuario}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
