import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const IndexView: FC = () => {
  const navigate = useNavigate();
  navigate('/search');

  return null;
};

export default IndexView;
