import { Box, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Home = () => {
  const {} = useContext(DataContext)
  return (
    <Box>
      <Paper elevation={24}>
        <Typography>
          asdas
        </Typography>
      </Paper>
      
    </Box>
  )
}

export default Home;