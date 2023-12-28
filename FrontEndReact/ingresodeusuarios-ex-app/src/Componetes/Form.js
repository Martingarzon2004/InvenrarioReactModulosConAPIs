import React from 'react';

const Form = ({usuario, setUsuario}) => {

    const handleChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    };

    let{Nombre, Clavedeacceso, Clavedeautenticacion} = usuario;

    const handleSubmit = () => {
        //Verificación de datos nulos
        if (Nombre === '' || Clavedeacceso === '' || Clavedeautenticacion === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        //consulta de datos
        const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(usuario)
        };
        fetch('http://localhost:9003/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        //reinicio de "state" del usuario al enviar
        setUsuario({
            Nombre: '',
            Clavedeacceso: '',
            Clavedeautenticacion: ''
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='nombre' className='form-label'>Nombre</label>
                <input value={Nombre} name='Nombre' onChange={handleChange} type='text' id='nombre' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='clavedeacceso' className='form-label'>Clave de acceso</label>
                <input value={Clavedeacceso} name='Clavedeacceso' onChange={handleChange} type='varchar' id='clavedeacceso' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='clavedeautenticacion' className='form-label'>Clave de autenticación</label>
                <input value={Clavedeautenticacion} name='Clavedeautenticacion' onChange={handleChange} type='varchar' id='clavedeautenticacion' className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Crear nuevo usuario</button>
        </form>
    );
};

export default Form;