import { AccountCircle, LockRounded, Key, KeyOff } from "@mui/icons-material";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false);

  const changeShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const reqLogin = async () => {
    await axios.post(`${process.env.REACT_APP_API_KEY}admin/login`, {
      email,
      senha
    }).then(({ data }) => {
      if (data.success) {
        localStorage.setItem('admin', JSON.stringify(data.token))
        navigate('/dashboard')
      }
    }).catch(({ response: { data } }) => {
      setError(data.message)
      setTimeout(() => {
        setError('')
      }, 5000)
    })
  }

  useEffect(() => {
    if (localStorage.getItem('admin')) {
      navigate('/dashboard')
    }
  }, [navigate])

  return (
    <Grid container style={{ minHeight: "100vh" }}>
     <Logo />
      <Grid
        container
        item
        xs={12}
        sm={6}
        alignItems="center"
        direction="column"
        justifyContent="space-between"
        style={{ padding: 10 }}
      >
        <div />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 400,
            minWidth: 300,
          }}
        >
          <Grid container justifyContent="center">
            <Typography marginBottom="50px" variant="h4" component="div">
              Seja Bem Vindo
            </Typography>
          </Grid>
          {error ? (
            <Typography sx={{ color: 'red', textAlign: 'center' }}>{error}</Typography>
          ): '' }
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            label="Email"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            type={showPassword ? "text" : "password"}
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
            label="Password"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ cursor: "pointer" }}>
                  {showPassword ? (
                    <KeyOff onClick={changeShowPassword} />
                  ) : (
                    <Key onClick={changeShowPassword} />
                  )}
                </InputAdornment>
              ),
            }}
          />

          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: 10, height: 40 }}
            onClick={reqLogin}
          >
            Logar
          </Button>
        </div>
        <div />
      </Grid>
    </Grid>
  );
};

export default Login;
