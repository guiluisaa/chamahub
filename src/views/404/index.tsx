import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const Redirect404View: FC = () => {
  const navigate = useNavigate();
  navigate('/');

  return null;
};

export default Redirect404View;
