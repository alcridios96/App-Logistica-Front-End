import React from 'react'
import { Table, Button } from 'react-bootstrap';

const PersonaList = (props: any) => {
  const { personas, editarPersona, borrarPersona } = props;

  const listaPersonas = personas.map((persona: any) => {
    const { id, name, image } = persona;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td><img src={image} alt={name} width={100}></img></td>
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
          <th>Name</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {listaPersonas}
      </tbody>
    </Table>
  )
}

export default PersonaList;