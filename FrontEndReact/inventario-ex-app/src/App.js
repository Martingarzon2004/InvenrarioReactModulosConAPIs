import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Componetes/Navbar';
import Lista from './Componetes/Lista';
import Form from './Componetes/Form';

function App() {
  const [producto, setProducto] = useState({
    Nombre: '',
    Cantidad: '',
    Tipodeproducto: '',
    Localizacion: '',
    Preciodeventa: ''
  });

  const [productos, setProductos] = useState([]);

  const [listUpdated, setListUpdated] = useState(false);
  
  //Metodo GET
  useEffect(() => {
    const getProductos = () => {
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setProductos(res))
    };
    getProductos();
    setListUpdated(false)
  }, [listUpdated]);
  
  return (
    <Fragment>
      <Navbar brand='Inventario Ex App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-10'>
            <h2 style={{textAlign: 'center'}}>Lista de productos</h2> 
            <Lista producto={producto} setProducto={setProducto} productos={productos} setListUpdated={setListUpdated}/>
          </div>
          <div className='col-5'>
            <h2 style={{textAlign: 'center'}}>Formulario</h2>
            <Form producto={producto} setProducto={setProducto}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
