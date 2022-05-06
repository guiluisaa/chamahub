import React, { FC } from 'react';

import * as S from './styles';

import useHistory from '@/io/redux/history/useHistoryStore.hook';
import RecordCard from '@/components/RecordCard';

const HistoryView: FC = () => {
  const { records } = useHistory();

  return (
    <S.Wrapper>
      <S.Title>Terms History</S.Title>

      <S.RecordsWrapper>
        {records.map(record => (
          <S.RecordWrapper key={record.created_at}>
            <RecordCard term={record.term} />
          </S.RecordWrapper>
        ))}
      </S.RecordsWrapper>
    </S.Wrapper>
  );
};

export default HistoryView;
