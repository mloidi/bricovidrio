import React from 'react';
import styled from 'styled-components';

import Label from './Label';

const InputDiv = styled.div`
  display: grid;
  grid-template-columns: auto;
`;

const InputText = styled.input`
  border: none;
  border-bottom: 2px solid #ccc;
  text-align: start;
  margin: 0 0.5rem 0.5rem 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  background-color: transparent;
  :focus {
    outline: none;
    transition: 0.5s;
    border-color: #1352b1;
    border-left: 1px solid #1352b1;
    border-right: 1px solid #1352b1;
    border-top: 1px solid #1352b1;
  }
`;

const InputSubmit = styled.input`
  background-color: ${props => (props.disabled ? '#1352b1' : 'lightgray')};
  padding: 0.5rem;
  margin: 0.2rem 0.2rem 0 0.5rem;
  display: inline-block;
  border: 0;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    border-bottom: 1px white solid;
    &:after {
      width: calc(100% - 60px);
    }
  }
`;

const Input = props => (
  <InputDiv>
    {props.type === 'text' && (
      <React.Fragment>
        <Label text={props.label} />
        <InputText {...props} />
      </React.Fragment>
    )}
    {props.type === 'submit' && <InputSubmit {...props} />}
  </InputDiv>
);

export default Input;
