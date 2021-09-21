import React from 'react';
import styled from 'styled-components';
import { Button } from '@/fork-ui/src/core';
import { X } from '@fork-ui/src/icons/lazy';

const Wrapper = styled.div``;
const LoginPage = () => {
  return (
    <Wrapper>
      <Button icon={<X />} />
    </Wrapper>
  );
};

export default LoginPage;
