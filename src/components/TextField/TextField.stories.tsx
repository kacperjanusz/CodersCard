import React from 'react';
import withFormik from 'storybook-formik';

import { TextField, TextFieldProps } from '.';

export default {
  title: 'TextField',
  component: 'TextField',
  decorators: [withFormik],
};
const basePropsData: Partial<TextFieldProps> = {
  label: 'Label',
  variant: 'filled',
  name: 'name',
};

export const BaseInput = () => {
  return <TextField {...basePropsData} />;
};
export const AreaInput = () => {
  return <TextField multiline {...basePropsData} />;
};
