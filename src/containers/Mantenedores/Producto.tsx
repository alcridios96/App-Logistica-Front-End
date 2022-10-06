import React, { useEffect, useState } from 'react';
import API from '../../services/API'
import { Button } from 'react-bootstrap';
import ProductoList from '../../components/Lists/Mantenedores/ProductoList';
import ProductoModal from '../../components/Modals/Mantenedores/ProductoModal';

export const Producto = (props: any) => {
  const [productos, setProductos] = useState([]);

  const initialProductoData = {
    nombre: '',
    image: ''
  }

  const [newProductoData, setNewProductoData] = useState(initialProductoData);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [validateForm, setValidateForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    try {
      let response = await API.get('/getPersonas');
      setProductos(response.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  const borrarProducto = async (id: number) => {
    if (window.confirm("Estas seguro?")) {
      try {
        let response = await API.remove(`/episode/${id}`);
        setProductos(response.results);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  const agregarProducto = async () => {
    try {
      let response = await API.save('/episode', newProductoData);
      resetModal();
      setProductos(response.results);
    }
    catch (error) {
      setErrorMsg(JSON.stringify(error));
      console.log(error);
    }
  }

  const editarProducto = async (id: number) => {
    try {
      await API.update(`/episode/${id}`, newProductoData);
      resetModal();
      getProductos();
    }
    catch (error) {
      setErrorMsg(JSON.stringify(error));
    }
  }

  const handleFormChange = (tipo: any, value: any) => {
    if (value === '')
      setValidateForm(true);

    setNewProductoData({ ...newProductoData, [tipo]: value });
  }

  const handleFormSubmit = (form: any, isEdit: any) => {
    setValidateForm(true);

    if (form.checkValidity())
      isEdit ? editarProducto(newProductoData.id) : agregarProducto();
  };

  const resetModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setNewProductoData(initialProductoData);
    setValidateForm(false);
    setErrorMsg('');
  }

  const handleOpenModal = (editar = false, productoToEdit = null) => {
    if (editar) {
      setIsEdit(true);
      setNewProductoData(productoToEdit);
    }
    setShowModal(true);
  }

  const handleCloseModal = () => {
    resetModal();
  }

  return (
    <div className="container mt-4">
      <h1>Productos</h1>
      <Button variant="info mb-3" onClick={() => handleOpenModal()}> Agregar Producto </Button>
      <ProductoModal
        show={showModal}
        handleClose={handleCloseModal}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
        isEdit={isEdit}
        validate={validateForm}
        errorMsg={errorMsg}
        producto={newProductoData}
      />
      <ProductoList
        productos={productos}
        borrarProducto={borrarProducto}
        editarProducto={handleOpenModal}
      />
    </div>
  )
}