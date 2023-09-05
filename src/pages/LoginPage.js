import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const LoginPage = () => {
  // const Container = styled.div`
  //   background: blue;
  // `
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        
      >
        <Typography variant="body1">
          Sleeper Fantasy Stats
        </Typography>
        <TextField id="filled-basic" label="Enter League ID" variant="filled" />
        
      </Box>
    </Container>
  )
}

export default LoginPage