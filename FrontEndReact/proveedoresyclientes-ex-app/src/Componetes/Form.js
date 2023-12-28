import React from 'react';

const Form = ({entidad, setEntidad}) => {

    const handleChange = e => {
        setEntidad({
            ...entidad,
            [e.target.name]: e.target.value
        })
    };

    let{Nombre, Proveedorocliente, ZonadeBogota} = entidad;

    const handleSubmit = () => {
        //Verificación de datos nulos
        if (Nombre === '' || Proveedorocliente === '' || ZonadeBogota === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        //consulta de datos
        const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(entidad)
        };
        fetch('http://localhost:9001/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        //reinicio de "state" del producto a enviar
        setEntidad({
            Nombre: '',
            Proveedorocliente: '',
            ZonadeBogota: ''
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='nombre' className='form-label'>Nombre</label>
                <input value={Nombre} name='Nombre' onChange={handleChange} type='text' id='nombre' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='proveedorocliente' className='form-label'>Proveedor o Cliente</label>
                <input value={Proveedorocliente} name='Proveedorocliente' onChange={handleChange} type='varchar' id='proveedorocliente' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='zonadebogota' className='form-label'>Zona de Bogotá</label>
                <input value={ZonadeBogota} name='ZonadeBogota' onChange={handleChange} type='varchar' id='zonadebogota' className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Crear nueva entidad</button>
        </form>
    );
};

export default Form;