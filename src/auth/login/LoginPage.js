import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, Card, CardActions, CardContent, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import Typography from '@mui/material/Typography';

import React from 'react'

const LoginPage = () => {
  const [values, setValues] = React.useState({
    password: '',
    username:'',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const loginUser = () => {
    console.log(values.username)
    console.log(values.password)
  }
  return (
    <div className='content' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"10ch" }}>
      <Card sx={{ m: 4, padding: 5, minWidth: 275, maxWidth: 500 }}>
          <form className='content-form' onSubmit={loginUser}>
        <CardContent>
          <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
            Inicio de Sesión
          </Typography>

          <TextField
            sx={{ m: 1, width: '30ch' }}
            id="outlined-basic"
            label="Usuario"
            value={values.username}
            onChange={handleChange('username')}
            variant="outlined" />


          <FormControl
            sx={{ m: 1, width: '30ch' }}
            variant="outlined">

            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput

              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

        </CardContent>
        <CardActions className='contentBtn'>
          <Button size='large' type='submit' sx={{m:1, width: '30ch', justifyContent: 'canter', margin:'auto'}}
            variant="contained">Ingresar</Button>
        </CardActions>
          </form>
      </Card>
    </div>
  )
}

export default LoginPage

