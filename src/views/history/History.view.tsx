import React, { FC } from 'react';
import styled from 'styled-components';

import SharedContainer from '@/components/Container';
import { Title as SharedTitle } from '@/components/Typograph';
import useHistory from '@/io/redux/history/useHistoryStore.hook';
import RecordCard from '@/components/RecordCard';

const Container = styled(SharedContainer)`
  width: 100%;
`;

const Title = styled(SharedTitle)`
  margin-top: 40px;
  text-align: center;
`;

const RecordsWrapper = styled.ul`
  margin: 40px auto 0;
  width: 100%;
  max-width: 335px;
`;

const RecordWrapper = styled.li`
  display: block;
  margin-top: 20px;
`;

const HistoryView: FC = () => {
  const { records } = useHistory();

  return (
    <Container>
      <Title>Terms History</Title>

      <RecordsWrapper>
        {records.map(record => (
          <RecordWrapper key={record.created_at}>
            <RecordCard term={record.term} />
          </RecordWrapper>
        ))}
      </RecordsWrapper>
    </Container>
  );
};

export default HistoryView;
