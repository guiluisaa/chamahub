import React, { FC } from 'react';

import * as S from './styles';

import useHistory from '@/hooks/useHistory.hook';
import RecordCard from '@/components/RecordCard';

const HistoryView: FC = () => {
  const { records } = useHistory();

  return (
    <S.Wrapper>
      <S.Title>Terms History</S.Title>

      <S.RecordsWrapper>
        {records.map(record => (
          <S.RecordWrapper key={record.createdAt}>
            <RecordCard term={record.term} />
          </S.RecordWrapper>
        ))}
      </S.RecordsWrapper>
    </S.Wrapper>
  );
};

export default HistoryView;
