import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormLogin, Logo } from "../components";

function Login() {
  const navigate = useNavigate();
  
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
        <FormLogin />
        <div />
      </Grid>
    </Grid>
  );
};

export default Login;
