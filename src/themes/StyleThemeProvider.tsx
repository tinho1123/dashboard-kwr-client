import { createTheme, ThemeProvider } from '@mui/material/styles'

interface Props {
  children: React.ReactNode
}

const StyleThemeProvider: React.FC<Props> = ({ children }) => {
  const styles = createTheme({
    palette: {
      primary: {
        main: '#ff8c00',
      }
    } 
  })

  return (
<ThemeProvider theme={styles}>
  {children}
</ThemeProvider>
  )
}

export default StyleThemeProvider;