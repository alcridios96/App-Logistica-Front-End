import React from 'react'
import { Table, Button } from 'react-bootstrap';

const PersonaList = (props: any) => {
  const { personas, editarPersona, borrarPersona } = props;

  const listaPersonas = personas.map((persona: any) => {
    const { id, nombre, correo, numero } = persona;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{nombre}</td>
        <td>{correo}</td>
        <td>{numero}</td>
        <td>
          <Button variant="success" className="mr-2" onClick={() => editarPersona(true, persona)}> Editar </Button>
          <Button variant="danger" onClick={() => borrarPersona(id)}>Eliminar</Button>
        </td>
      </tr>
    )
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Numero</th>
        </tr>
      </thead>
      <tbody>
        {listaPersonas}
      </tbody>
    </Table>
  )
}

export default PersonaList;