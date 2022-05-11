import styled from 'styled-components';

import SharedContainer from '@/components/Container';

import SharedAlert from '@/components/Alert';

export const Wrapper = styled(SharedContainer)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Alert = styled(SharedAlert)`
  width: 100%;
  max-width: 335px;
  margin: 0 auto;

  text-align: center;
`;
