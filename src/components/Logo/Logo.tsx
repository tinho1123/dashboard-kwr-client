import { Grid } from '@mui/material'
import { logoSVG } from "../../assets";


const Logo = () => {
  const mobile = window.screen.width < 600;
  return (
    <>
    { mobile ? '' 
    : (
      <Grid item xs={12} sm={6}>
        <img
         src={logoSVG}
         alt="Logo KWR Gestão"
         style={{ width: "100%", height: "100%", objectFit: "cover" }}
       />
      </Grid>
      )
    }
    </>
  )
}

export default Logo