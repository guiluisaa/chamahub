import axios from 'axios';
import { useState } from 'react';

const useAbortSignal = () => {
  const [signal] = useState(axios.CancelToken.source());
  return signal;
};

export default useAbortSignal;
