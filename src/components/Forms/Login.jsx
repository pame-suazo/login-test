import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Container, Box,TextField, Button, IconButton, InputAdornment, Avatar, Alert} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './style.css'; 

export function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword ]= useState('');
    const [error, setError] = useState('');
   

    const usuariosPermitidos = [
      { usuario: 'pame', contraseña: 'pame123', nombre:'Pamela' },
      { usuario: 'nico', contraseña: 'nico123', nombre: 'Nicole'},

    ];


    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const handleUserChange = (event) => {
      setUser(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    

      const usuarioValido = usuariosPermitidos.find(
        (usuarioPermitido) =>
          usuarioPermitido.usuario === user && usuarioPermitido.contraseña === password
      );
    
      if (usuarioValido) {
        console.log('Inicio de sesión exitoso');
        localStorage.setItem('usuarioActual', JSON.stringify({
          usuario: user,
          nombre: usuarioValido.nombre,
        }));
       
        setError(''); 
        navigate('/home');
        
      } else {
        setError('Incorrect username or password');
      }
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
            padding: '30px',
            borderRadius: '8px',
            flexDirection: 'column',
            textAlign: 'center',
            display: 'flex',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Avatar alt="Avatar" src="https://drive.google.com/uc?expor=download&id=1XQgt69qRxKviDC1DdIKFDU18WXWZD1MS" sx={{ width: 100, height: 100, marginBottom: -4 }} />
          <h1 className="titlee">EasyCoach.Club</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="User"
              variant="outlined"
              value={user}
              onChange={handleUserChange}
            />
            <TextField
              fullWidth
              label="Password"
              className="inputs"
              variant="outlined"
              sx={{ marginBottom: 4 }}
              margin="normal"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
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
              className="botonb"
              fullWidth
              size="large"
              type="submit"
            >
              Sign in
            </Button>
          </form>
          {error && (
            <Alert severity="error" sx={{ width: '90%', marginTop: '30px' }}>
              {error}
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
