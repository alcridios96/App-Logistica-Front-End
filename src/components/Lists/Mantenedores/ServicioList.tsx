import React from 'react'
import { Table, Button } from 'react-bootstrap';

const ServicioList = (props: any) => {
  const { servicios, editarServicio, borrarServicio } = props;

  const listaServicios = servicios.map((servicio: any) => {
    const { id, nombre, tipoServicio } = servicio;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{nombre}</td>
        <td>{tipoServicio}</td>
        <td>
          <Button variant="success" className="mr-2" onClick={() => editarServicio(true, servicio)}> Editar </Button>
          <Button variant="danger" onClick={() => borrarServicio(id)}>Eliminar</Button>
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
          <th>Tipo Servicio</th>
        </tr>
      </thead>
      <tbody>
        {listaServicios}
      </tbody>
    </Table>
  )
}

export default ServicioList;