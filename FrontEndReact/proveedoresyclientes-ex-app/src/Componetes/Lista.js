import React from 'react';

const Lista = ({entidad, setEntidad, entidades, setListUpdated}) => {
    
    //Borrar datos del la lista de proveedores y clientes

    const handleDelete = Id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9001/api/' + Id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    };
    
    //Actualizar datos del lista de proveedores y clientes

    
    let{Nombre, Proveedorocliente, ZonadeBogota} = entidad;
    
    const handleUpdate = Id => {
        //Verificación de datos nulos
        if (Nombre === '' || Proveedorocliente === '' || ZonadeBogota === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(entidad)
        }
        fetch('http://localhost:9001/api/' + Id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reinicio de "state" de la entidad a enviar
        setEntidad({
            Nombre: '',
            Proveedorocliente: '',
            ZonadeBogota: ''
        })

        setListUpdated(true)
    };

    return (
        <table className='table table-bordered'>
            <tread>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Proveedor o Cliente</th>
                    <th>Zona de Bogotá</th>
                </tr>
            </tread>
            <tbody>
                {entidades.map(entidad => (
                    <tr key={entidad.Id}>
                        <td>{entidad.Id}</td>
                        <td>{entidad.Nombre}</td>
                        <td>{entidad.Proveedorocliente}</td>
                        <td>{entidad.ZonadeBogota}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(entidad.Id)} className='btn btn-danger'>Borrar</button>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(entidad.Id)} className='btn btn-secondary'>Modificar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Lista;