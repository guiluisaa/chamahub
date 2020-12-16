import React, { FC } from 'react';

import { Title } from '@/components/typograph/Typograph.component';
import Button from '@/components/button/Button.component';

const IndexView: FC = () => (
  <>
    <Title>Index</Title>
    <br />
    <br />
    <br />

    <Button>Search</Button>
    <br />
    <br />
    <br />
    <Button disabled>Search</Button>
    <br />
    <br />
    <br />
    <Button block>Search</Button>
    <br />
    <br />
    <br />
    <Button block isLoading>
      Search
    </Button>
    <br />
    <br />
    <br />
    <Button block isLoading disabled>
      Search
    </Button>
  </>
);

export default IndexView;
