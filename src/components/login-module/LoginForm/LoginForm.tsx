import React from 'react';
import styled from 'styled-components';
import { FormField, Textbox, Textarea, Password, Select, MultiSelect } from '@/fork-ui/src/core';
import { X } from '@fork-ui/src/icons/lazy';

const LoginForm = () => {
  return (
    <form>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <Textbox />
      </FormField>
      <FormField>
        <FormField.Label>Password</FormField.Label>
        <Password />
      </FormField>
    </form>
  );
};

export default LoginForm;
