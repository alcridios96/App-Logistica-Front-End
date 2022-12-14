import React, { useEffect, useState } from 'react';
import API from '../../services/HttpClient';
import { Button } from 'react-bootstrap';
import PersonaList from '../../components/Lists/Mantenedores/PersonaList';
import PersonaModal from '../../components/Modals/Mantenedores/PersonaModal';

export const Persona = (props: any) => {
  const [personasList, setPersonasList] = useState([]);

  let initialPersonaData = {
    nombre: '',
    tipoUsuario: ''
  };

  const [personaData, setPersonaData] = useState(initialPersonaData);
  const [isEdit, setIsEdit] = useState(false);
  const [hasErrorInForm, setHasErrorInForm] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getPersonas();
  }, []);

  const getPersonas = async () => {
    try {
      let data = await API.get('/getPersonas');
      setPersonasList(data);
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const borrarPersona = async (id: number) => {
    if (window.confirm("Estas seguro?")) {
      try {
        await API.remove(`/character/${id}`);
        setPersonasList(personasList.filter((persona) => persona.id !== id));
      }
      catch (error) {
        console.log(error);
      }
    }
  }

  const agregarPersona = async () => {
    try {
      let data = await API.save('/character', newPersonaData);
      resetModal();
      getPersonas();
    }
    catch (error) {
      console.log(error);
    }
  }

  const editarPersona = async (id: number) => {
    try {
      const data = await API.update(`/character/${id}`, newPersonaData);
      resetModal();
      getPersonas();
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleFormChange = (tipo: any, value: any) => {
    if (value === '')
      setHasErrorInForm(true);

    setPersonaData({ ...personaData, [tipo]: value });
  }

  const handleFormSubmit = (form: any, isEdit: any) => {
    setHasErrorInForm(true);

    if (form.checkValidity())
      isEdit ? editarPersona(personaData.id) : agregarPersona();
  };

  const resetModal = () => {
    setOpenModal(false);
    setIsEdit(false);
    setPersonaData(initialPersonaData);
    setHasErrorInForm(false);
    setErrorMsg('');
  }

  const handleOpenModal = (editar = false, personaToEdit = null) => {
    if (editar) {
      setIsEdit(true);
      setPersonaData(personaToEdit);
    }
    setOpenModal(true);
  }

  const handleCloseModal = () => {
    resetModal();
  }

  return (
    <div className="container mt-4">
      <h1>Personas</h1>
      <Button variant="info mb-3" onClick={() => handleOpenModal()}> Agregar Persona </Button>
      <PersonaModal
        show={openModal}
        handleClose={handleCloseModal}
        handleChange={handleFormChange}
        handleSubmit={handleFormSubmit}
        isEdit={isEdit}
        validate={hasErrorInForm}
        errorMsg={errorMsg}
        persona={personaData}
      />
      <PersonaList
        personas={personasList}
        borrarPersona={borrarPersona}
        editarPersona={handleOpenModal}
      />
    </div>
  )
}