import React from 'react';

const Form = ({producto, setProducto}) => {

    const handleChange = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    };

    let{Nombre, Cantidad, Tipodeproducto, Localizacion, Preciodeventa} = producto;

    const handleSubmit = () => {
        //Verificación de datos nulos
        if (Nombre === '' || Cantidad === '' || Tipodeproducto === '' || Localizacion === '' || Preciodeventa === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        //consulta de datos
        const requestInit = {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(producto)
        };
        fetch('http://localhost:9000/api', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        //reinicio de "state" del producto a enviar
        setProducto({
            Nombre: '',
            Cantidad: '',
            Tipodeproducto: '',
            Localizacion: '',
            Preciodeventa: ''
        })
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='nombre' className='form-label'>Nombre</label>
                <input value={Nombre} name='Nombre' onChange={handleChange} type='text' id='nombre' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='cantidad' className='form-label'>Cantidad</label>
                <input value={Cantidad} name='Cantidad' onChange={handleChange} type='varchar' id='cantidad' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='tipodeproducto' className='form-label'>Tipodeproducto</label>
                <input value={Tipodeproducto} name='Tipodeproducto' onChange={handleChange} type='varchar' id='tipodeproducto' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='localizacion' className='form-label'>Localizacion</label>
                <input value={Localizacion} name='Localizacion' onChange={handleChange} type='varchar' id='localizacion' className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='preciodeventa' className='form-label'>Preciodeventa</label>
                <input value={Preciodeventa} name='Preciodeventa' onChange={handleChange} type='varchar' id='preciodeventa' className='form-control'/>
            </div>
            <button type='submit' className='btn btn-primary'>Crear nuevo producto</button>
        </form>
    );
};

export default Form;