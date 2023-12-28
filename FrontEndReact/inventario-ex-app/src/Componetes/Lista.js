import React from 'react';

const Lista = ({producto, setProducto, productos, setListUpdated}) => {
    
    //Borrar datos del inventario

    const handleDelete = Id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + Id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    };
    
    //Actualizar datos del inventario
    
    let{Nombre, Cantidad, Tipodeproducto, Localizacion, Preciodeventa} = producto;
    
    const handleUpdate = Id => {
        //Verificación de datos nulos
        if (Nombre === '' || Cantidad === '' || Tipodeproducto === '' || Localizacion === '' || Preciodeventa === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(producto)
        }
        fetch('http://localhost:9000/api/' + Id, requestInit)
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

        setListUpdated(true)
    };

    return (
        <table className='table table-bordered'>
            <tread>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Tipo de producto</th>
                    <th>Localización</th>
                    <th>Precio de venta</th>
                </tr>
            </tread>
            <tbody>
                {productos.map(producto => (
                    <tr key={producto.Id}>
                        <td>{producto.Id}</td>
                        <td>{producto.Nombre}</td>
                        <td>{producto.Cantidad}</td>
                        <td>{producto.Tipodeproducto}</td>
                        <td>{producto.Localizacion}</td>
                        <td>{producto.Preciodeventa}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(producto.Id)} className='btn btn-danger'>Borrar</button>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(producto.Id)} className='btn btn-secondary'>Modificar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Lista;