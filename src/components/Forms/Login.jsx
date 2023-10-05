import './style.css'; 
import React, { useState } from 'react';
import { Container, Box,TextField, Button, IconButton, InputAdornment, Avatar} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';


export function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
  return (
    <Container maxWidth="xs">    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
         <Box
            sx={{
            alignItems: 'center',
            padding: '30px', // Espacio de relleno en el contenedor secundario
            borderRadius: '8px', // Borde redondeado en el contenedor secundario
            flexDirection: 'column', // Añade esto para mantener la alineación vertical
            textAlign: 'center',
            display: 'flex',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
        }}
        >
                <Avatar alt="Avatar" src= "https://drive.google.com/uc?expor=download&id=1XQgt69qRxKviDC1DdIKFDU18WXWZD1MS"sx={{ width: 100, height: 100, marginBottom: -4 }} />
                <h1 className="title">EasyCoach.Club</h1>
                <form>
                    <TextField
                    fullWidth
                    label="User"
                    variant="outlined"
                
                    />
         <TextField
            fullWidth
            label="Password"
            className='inputs'
            variant="outlined"
            sx={{marginBottom: 4}}
            margin="normal"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        <Button
          variant="contained"
          className="submit"
          fullWidth
          size="large"
          type='submiit'
        >
          Sign in
        </Button>
      </form>
      </Box>
    </Box>
  </Container>
  );
};

export default Login;
