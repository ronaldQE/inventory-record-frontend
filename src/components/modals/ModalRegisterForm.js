import React, {useEffect, useState}from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useForm } from '../../hooks/useForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const styleError = {
  color: '#dc3545',
  marginTop: "-1px",
  fontSize: 'small'
}

const styleTextFile = {
  marginTop: "10px",
  with: '40%',
}

const initialForm = {
  ci: "",
  name: "",
  lastname: "",
  email: ""
};

const validationsForm = (form) => {
  let errors = {};
  let regexNameAndLastname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexNum = /^[0-9]+$/;
  let regexCantNum = /^.{10}$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  //let regexComments = /^.{1,255}$/;

  if (!form.ci.trim()) {
    errors.ci = "El campo 'Cédula' es requerido"
  } else if (!regexNum.test(form.ci.trim())) {
    errors.ci = "Igrese caracteres númericos"
  } else if (!regexCantNum.test(form.ci.trim())) {
    errors.ci = "Igrese 10 dígitos"
  }


  if (!form.name.trim()) {
    errors.name = "El campo 'Nombres' es requerido"
  } else if (!regexNameAndLastname.test(form.name.trim())) {
    errors.name = "Igrese solo letras al campo 'Nombres'"
  }
  if (!form.lastname.trim()) {
    errors.lastname = "El campo 'Apellidos' es requerido"
  } else if (!regexNameAndLastname.test(form.lastname.trim())) {
    errors.lastname = "Igrese solo letras al campo 'Apellidos'"
  }


  if (!form.email.trim()) {
    errors.email = "El campo 'Correo Electrónico' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Correo Electrónico' es incorrecto"
  }

  return errors
};

export default function ModalRegisterForm({ data, open, handleClose }) {
  

  const {
    form,
    errors,
    loading,
    handleChange,
    handleBlur,
    handleSubmit,
    cleanForm,
  } = useForm(initialForm, validationsForm, handleClose);

  const modalClose =()=>{
    handleClose()
    cleanForm();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box>

            <Typography id="modal-modal-title" sx={{ marginBottom: 4, textAlign: "center" }} variant="h6" component="h2">
              Registro de Empleados
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                name="ci"
                label="Cédula"
                id="outlined-size-small"
                //defaultValue="Small"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.ci}
                size="small"
                fullWidth
                style={styleTextFile}
              />
              {errors.ci && <p style={styleError}>{errors.ci}</p>}
              <TextField
                name="name"
                label="Nombres"
                id="outlined-size-small"
                size="small"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.name}
                fullWidth
                style={styleTextFile}
              />
              {errors.name && <p style={styleError}>{errors.name}</p>}

              <TextField
                name='lastname'
                label="Apellidos"
                id="outlined-size-small"
                size="small"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.lastname}
                fullWidth
                style={styleTextFile}

              />
              {errors.lastname && <p style={styleError}>{errors.lastname}</p>}

              <TextField
                name='email'
                label="Correo Electrónico"
                id="outlined-size-small"
                size="small"
                onBlur={handleBlur}
                onChange={handleChange}
                value={form.email}
                fullWidth
                style={styleTextFile}

              />
              {errors.email && <p style={styleError}>{errors.email}</p>}

              {loading ? <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />}variant="outlined"> Registrar </LoadingButton>:<Button sx={{ marginTop: 4 }} variant="contained" type='submit'>Registrar</Button>}

            </form>
          </Box>
        </Box>
      </Modal>
      <ToastContainer/>
    </div>
  );
}
