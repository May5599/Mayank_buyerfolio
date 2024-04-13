import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: '10px',
  borderRadius: '5px',
  marginBottom: '20px',
  backgroundColor: '#EDEDED',
  '& .MuiLinearProgress-barColorPrimary': {
    background: 'linear-gradient(to right, #7731E4, #7731E4)',
  },
  '& .MuiLinearProgress-bar': {
    borderRadius: '5px',
  },
}));

export default function CustomLinearProgress({ value }) {
  
  const percentage = ((value - 1) / 7) * 100;

  return <StyledLinearProgress variant="determinate" value={percentage} />;
}
