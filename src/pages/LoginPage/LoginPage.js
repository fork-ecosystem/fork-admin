import React from 'react';
import styled from 'styled-components';
import { FormField, Textbox, Button, Password } from '@/fork-ui/src/core';
import { X } from '@fork-ui/src/icons/lazy';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 100px;
`;
const LoginPage = () => {
  return (
    <Wrapper>
      <form>
        <FormField required>
          <FormField.Label>Email</FormField.Label>
          <Textbox />
        </FormField>
        <FormField required>
          <FormField.Label>Password</FormField.Label>
          <Password />
        </FormField>
        <Button color="primary" color="primary">Click</Button>
      </form>
    </Wrapper>
  );
};

export default LoginPage;
