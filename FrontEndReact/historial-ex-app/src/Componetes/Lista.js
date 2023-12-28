import React from 'react';

const Lista = ({accion, setAccion, acciones, setListUpdated}) => {
    
    //Borrar datos del historial

    const handleDelete = Id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9002/api/' + Id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    };
    
    //Actualizar datos del historial
    
    let{Nombredelaaccion} = accion;
    
    const handleUpdate = Id => {
        //Verificación de datos nulos
        if (Nombredelaaccion === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(accion)
        }
        fetch('http://localhost:9002/api/' + Id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reinicio de "state" de la accion a enviar
        setAccion({
            Nombredelaaccion: '',
        })

        setListUpdated(true)
    };

    return (
        <table className='table table-bordered'>
            <tread>
                <tr>
                    <th>ID</th>
                    <th>Nombredelaaccion</th>
                    <th>Fecha</th>
                </tr>
            </tread>
            <tbody>
                {acciones.map(accion => (
                    <tr key={accion.Id}>
                        <td>{accion.Id}</td>
                        <td>{accion.Nombredelaaccion}</td>
                        <td>{accion.Fecha}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(accion.Id)} className='btn btn-danger'>Borrar</button>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(accion.Id)} className='btn btn-secondary'>Modificar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Lista;