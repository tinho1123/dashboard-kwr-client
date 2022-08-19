import { Box, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

interface Props {
  drawerWidth: string;
  mobile: boolean;
}

const Home: React.FC<Props> = ({ drawerWidth, mobile }) => {
  // const {} = useContext(DataContext)
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