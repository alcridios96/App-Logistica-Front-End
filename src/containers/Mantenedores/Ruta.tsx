import React, { useEffect, useState } from 'react';
import API from '../../services/API'
import { Button } from 'react-bootstrap';
import RutaList from '../../components/Lists/Mantenedores/RutaList';
import RutaModal from '../../components/Modals/Mantenedores/RutaModal';

export const Ruta = (props: any) => {
  const [rutas, setRutas] = useState([]);

  const initialRutaData = {
    inicio: '',
    fin: ''
  }

  const [newRutaData, setNewRutaData] = useState(initialRutaData);

  const [showModal, setShowModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [validateForm, setValidateForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getRutas();
  }, []);

  const getRutas = async () => {
    try {
      let response = await API.get('/character');
      setRutas(response.results);
    }
    catch (error) {
      console.log(error);
    }
  }

  const borrarRuta = async (id: number) => {
    if (window.confirm("Estas seguro?")) {
      try {
        let response = await API.remove(`/character/${id}`);
        setRutas(response.results);
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  const agregarRuta = async () => {
    try {
      let response = await API.save('/character', newRutaData);
      resetModal();
      setRutas(response.results);
    }
    catch (error) {
      setErrorMsg(JSON.stringify(error));
      console.log(error);
    }
  }

  const editarRuta = async (id: number) => {
    try {
      await API.update(`/character/${id}`, newRutaData);
      resetModal();
      getRutas();
    }
    catch (error) {
      setErrorMsg(JSON.stringify(error));
    }
  }

  const handleFormChange = (tipo: any, value: any) => {
    if (value === '')
      setValidateForm(true);

    setNewRutaData({ ...newRutaData, [tipo]: value });
  }

  const handleFormSubmit = (form: any, isEdit: any) => {
    setValidateForm(true);

    if (form.checkValidity())
      isEdit ? editarRuta(newRutaData.id) : agregarRuta();
  };

  const resetModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setNewRutaData(initialRutaData);
    setValidateForm(false);
    setErrorMsg('');
  }

  const handleOpenModal = (editar = false, rutaToEdit = null) => {
    if (editar) {
      setIsEdit(true);
      setNewRutaData(rutaToEdit);
    }
    setShowModal(true);
  }

  const handleCloseModal = () => {
    resetModal();
  }

  return (
    <div className="container mt-4">
      <h1>Rutas</h1>
      <Button variant="info mb-3" onClick={() => handleOpenModal()}> Agregar Ruta </Button>
      <RutaModal
        show={showModal}
        handleClose={handleCloseModal}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
        isEdit={isEdit}
        validate={validateForm}
        errorMsg={errorMsg}
        ruta={newRutaData}
      />
      <RutaList
        rutas={rutas}
        borrarRuta={borrarRuta}
        editarRuta={handleOpenModal}
      />
    </div>
  )
}