import React from 'react';

const Form = ({accion, setAccion}) => {

    const handleChange = e => {
        setAccion({
            ...accion,
            [e.target.name]: e.target.value
        })
    };

    let{Nombredelaaccion} = accion;

    const handleSubmit = () => {
        //Verificación de datos nulos
        if (Nombredelaaccion === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        //consulta de datos
        const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(accion)
        };
        fetch('http://localhost:9002/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        //reinicio de "state" del producto a enviar
        setAccion({
            Nombredelaaccion: ''
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='nombredelaaccion' className='form-label'>Nombre</label>
                <input value={Nombredelaaccion} name='Nombredelaaccion' onChange={handleChange} type='text' id='nombredelaaccion' className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Crear nueva accion</button>
        </form>
    );
};

export default Form;