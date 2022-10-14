import React, { useEffect, useState } from 'react';
import API from '../../services/HttpClient';
import { Button } from 'react-bootstrap';
import ServicioList from '../../components/Lists/Mantenedores/ServicioList';
import ServicioModal from '../../components/Modals/Mantenedores/ServicioModal';

export const Servicio = (props: any) => {
  const [servicios, setServicios] = useState([]);

  const initialServicioData = {
    nombre: '',
    image: ''
  }

  const [newServicioData, setNewServicioData] = useState(initialServicioData);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [validateForm, setValidateForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getServicios();
  }, []);

  const getServicios = async () => {
    try {
      let response = await API.get('/episode');
      setServicios(response.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  const borrarServicio = async (id: number) => {
    if (window.confirm("Estas seguro?")) {
      try {
        let response = await API.remove(`/episode/${id}`);
        setServicios(response.results);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  const agregarServicio = async () => {
    try {
      let response = await API.save('/episode', newServicioData);
      resetModal();
      setServicios(response.results);
    }
    catch (error) {
      setErrorMsg(JSON.stringify(error));
      console.log(error);
    }
  }

  const editarServicio = async (id: number) => {
    try {
      await API.update(`/episode/${id}`, newServicioData);
      resetModal();
      getServicios();
    }
    catch (error) {
      setErrorMsg(JSON.stringify(error));
    }
  }

  const handleFormChange = (tipo: any, value: any) => {
    if (value === '')
      setValidateForm(true);

    setNewServicioData({ ...newServicioData, [tipo]: value });
  }

  const handleFormSubmit = (form: any, isEdit: any) => {
    setValidateForm(true);

    if (form.checkValidity())
      isEdit ? editarServicio(newServicioData.id) : agregarServicio();
  };

  const resetModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setNewServicioData(initialServicioData);
    setValidateForm(false);
    setErrorMsg('');
  }

  const handleOpenModal = (editar = false, servicioToEdit = null) => {
    if (editar) {
      setIsEdit(true);
      setNewServicioData(servicioToEdit);
    }
    setShowModal(true);
  }

  const handleCloseModal = () => {
    resetModal();
  }

  return (
    <div className="container mt-4">
      <h1>Servicios</h1>
      <Button variant="info mb-3" onClick={() => handleOpenModal()}> Agregar Servicio </Button>
      <ServicioModal
        show={showModal}
        handleClose={handleCloseModal}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
        isEdit={isEdit}
        validate={validateForm}
        errorMsg={errorMsg}
        servicio={newServicioData}
      />
      <ServicioList
        servicios={servicios}
        borrarServicio={borrarServicio}
        editarServicio={handleOpenModal}
      />
    </div>
  )
}