import CircularProgress from '@mui/joy/CircularProgress';
import { Box } from '@mui/material';

const Loader = () => {
  return (
    <Box alignItems={'center'} justifyContent={'center'} display={'flex'} m={5} fontSize={'30px'}>
      <CircularProgress variant="plain" />
    </Box>
  )
}

export default Loader
