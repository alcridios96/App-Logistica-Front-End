import React from 'react'
import { Table, Button } from 'react-bootstrap';

const ProductoList = (props: any) => {
  const { productos, editarProducto, borrarProducto } = props;

  const listaProductos = productos.map((producto: any) => {
    const { id, name, image } = producto;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td><img src={image} alt={name} width={100}></img></td>
        <td>
          <Button variant="success" className="mr-2" onClick={() => editarProducto(true, producto)}> Editar </Button>
          <Button variant="danger" onClick={() => borrarProducto(id)}>Eliminar</Button>
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
        {listaProductos}
      </tbody>
    </Table>
  )
}

export default ProductoList;