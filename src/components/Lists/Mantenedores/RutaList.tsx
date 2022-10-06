import React from 'react'
import { Table, Button } from 'react-bootstrap';

const RutaList = (props: any) => {
  const { rutas, editarRuta, borrarRuta } = props;

  const listaRutas = rutas.map((ruta: any) => {
    const { id, inicio, fin } = ruta;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{inicio}</td>
        <td>{fin}</td>
        <td>
          <Button variant="success" className="mr-2" onClick={() => editarRuta(true, ruta)}> Editar </Button>
          <Button variant="danger" onClick={() => borrarRuta(id)}>Eliminar</Button>
        </td>
      </tr>
    )
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Inicio</th>
          <th>Fin</th>
        </tr>
      </thead>
      <tbody>
        {listaRutas}
      </tbody>
    </Table>
  )
}

export default RutaList;