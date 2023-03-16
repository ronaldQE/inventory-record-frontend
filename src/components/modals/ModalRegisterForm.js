import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "70%",
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const styleTextFile = {
  marginBottom:4,
  with:'40%',
}
export default function ModalRegisterForm({ data, open, handleClose }) {

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

            <Typography id="modal-modal-title" sx={{marginBottom:4, textAlign:"center"}} variant="h6" component="h2">
              Registro de Empleados
            </Typography>
            <TextField
              label="Cédula"
              id="outlined-size-small"
              //defaultValue="Small"
              size="small"
              fullWidth 
              style={styleTextFile}
            />
            <br />
            <TextField
              label="Nombres"
              id="outlined-size-small"
              size="small"
              fullWidth 
              style={styleTextFile}
            />
            <br />

            <TextField
              label="Apellidos"
              id="outlined-size-small"
              size="small"
              fullWidth 
              style={styleTextFile}

            />
            <br />
            <TextField
              label="Correo Electrónico"
              id="outlined-size-small"
              size="small"
              fullWidth 
              style={styleTextFile}

            />
            <br />

            <Button variant="contained">Registrar</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
