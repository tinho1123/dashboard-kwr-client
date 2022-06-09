import { AccountCircle, LockRounded } from "@mui/icons-material";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={6}>
        <img
          src="https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2011/09/Gestao-empresarial.jpg"
          alt="Logo KWR Gestão"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Grid>
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
            <Typography variant="h4" component="div">
              Login
            </Typography>
          </Grid>
          <TextField
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
            type="password"
            label="Password"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockRounded />
                </InputAdornment>
              ),
            }}
          />

          <Button
            color="primary"
            variant="contained"
            style={{ marginTop: 10, height: 40 }}
            onClick={() => {
              navigate('/dashboard')
            }}
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
