import { useState, useEffect, FC } from 'react';
import Typography from '@mui/material/Typography';

const DateTime: FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <Typography> Time : {date.toLocaleTimeString()}</Typography>
      <Typography> Date : {date.toLocaleDateString()}</Typography>
    </>
  );
};

export default DateTime;
