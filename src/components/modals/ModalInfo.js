import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//import TextField from '@mui/material/TextField';
//import LoadingButton from '@mui/lab/LoadingButton';
//import SaveIcon from '@mui/icons-material/Save';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//import service from '../../service/employee.service';

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




export default function ModalInfo({ data, open, handleClose }) {


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>

                        <Typography id="modal-modal-title" sx={{ marginBottom: 4, textAlign: "center" }} variant="h6" component="h2">
                            Datos de Empleados
                        </Typography>
                        <Box>
                            <Box sx={{ background: "#cccccc", margin: "20px", padding: "20px", borderRadius: 3 }}>
                                <Typography id="modal-modal-title" sx={{ textAlign: "center" }} variant="h6" component="h4">
                                    Datos de Cuenta
                                </Typography>
                                <label>
                                    CEDULA: {data.ci}
                                </label>
                                <br></br>
                                <label>
                                    NOMBRES: {data.name}
                                </label>
                                <br></br>
                                <label>
                                    APELLIDOS: {data.lastname}
                                </label>
                                <br></br>
                                <label>
                                    CORREO ELECTRONICO: {data.email}
                                </label>

                            </Box>
                            <Box sx={{ background: "#AED6F1", margin: "20px", padding: "20px", borderRadius: 3 }}>
                                <Typography id="modal-modal-title" sx={{ textAlign: "center" }} variant="h6" component="h4">
                                    Datos de Agregados
                                </Typography>
                                <label>
                                    FECHA DE NACIMIENTO: {data.brithDate}
                                </label>
                                <br></br>
                                <label>
                                    DIRECCION DE DOMICILIO: {data.address}
                                </label>
                                <br></br>
                                <label>
                                    TELEFONO: {data.phone}
                                </label>
                                <br></br>
                                <label>
                                    ESTADO DE VACUNACION: {data.stateVaccine}
                                </label>
                                <Box sx={{ background: "#7FB3d5", margin: "10px", padding: "10px", borderRadius: 3 }}>
                                    <label>
                                        TIPO DE VACUNA: {data.typeVaccine}
                                    </label>
                                    <br></br>
                                    <label>
                                        FECHA DE VACUNACION: {data.dateVaccine}
                                    </label>
                                    <br></br>
                                    <label>
                                        NUMERO DE DOSIS: {data.numDose}
                                    </label>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
            </Modal>
            <ToastContainer />
        </div>
    );
}
