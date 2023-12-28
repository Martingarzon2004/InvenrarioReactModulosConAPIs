import React from 'react';

const Lista = ({usuario, setUsuario, usuarios, setListUpdated}) => {
    
    //Borrar datos de los usuarios

    const handleDelete = Id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9003/api/' + Id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    };
    
    //Actualizar datos de los usuarios
    
    let{Nombre, Clavedeacceso, Clavedeautenticacion} = usuario;
    
    const handleUpdate = Id => {
        //Verificación de datos nulos
        if (Nombre === '' || Clavedeacceso === '' || Clavedeautenticacion === '' ) {
            alert('Todos los campos son obligatorios')
            return
        };

        const requestInit = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(usuario)
        }
        fetch('http://localhost:9003/api/' + Id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reinicio de "state" del usuario a enviar
        setUsuario({
            Nombre: '',
            Clavedeacceso: '',
            Clavedeautenticacion: ''
        })

        setListUpdated(true)
    };

    return (
        <table className='table table-bordered'>
            <tread>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Clave de acceso</th>
                    <th>Clave de autenticacion</th>
                </tr>
            </tread>
            <tbody>
                {usuarios.map(usuario => (
                    <tr key={usuario.Id}>
                        <td>{usuario.Id}</td>
                        <td>{usuario.Nombre}</td>
                        <td>{usuario.Clavedeacceso}</td>
                        <td>{usuario.Clavedeautenticacion}</td>
                        <td>
                            <div className='mb-3'>
                                <button onClick={() => handleDelete(usuario.Id)} className='btn btn-danger'>Borrar</button>
                            </div>
                            <div className='mb-3'>
                                <button onClick={() => handleUpdate(usuario.Id)} className='btn btn-secondary'>Modificar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Lista;