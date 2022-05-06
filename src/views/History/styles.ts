import styled from 'styled-components';

import SharedContainer from '@/components/Container';
import { Title as SharedTitle } from '@/components/Typograph';

export const Wrapper = styled(SharedContainer)`
  width: 100%;
`;

export const Title = styled(SharedTitle)`
  margin-top: 40px;
  text-align: center;
`;

export const RecordsWrapper = styled.ul`
  margin: 40px auto 0;
  width: 100%;
  max-width: 335px;
`;

export const RecordWrapper = styled.li`
  display: block;
  margin-top: 20px;
`;
