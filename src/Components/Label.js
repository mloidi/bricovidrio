import React from 'react';

import styled from 'styled-components';

const LabelStyle = styled.label`
  color: ${props => (!props.isValid ? 'red' : '#1352b1')};
  text-align: start;
  margin: 0.5rem;
  font-size: 1rem;
  background-color: transparent;
`;

const Label = props => <LabelStyle {...props}>{props.text}</LabelStyle>;

export default Label;
