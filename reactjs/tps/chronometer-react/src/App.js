import { 
  Box, 
  Container 
} from '@mui/material'
import { TopChrono } from './app/Chronometer';

function App() {
  return (
    <>
      <Container maxWidth="ld">
        <Box sx={{ bgcolor: '#1a1919', height: '100vh' }}>
          <TopChrono />
        </Box>
      </Container>
    </>
  );
}

export default App;
