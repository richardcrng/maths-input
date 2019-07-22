import React from 'react';
import styled from 'styled-components'

const DivStyledAsInput = styled.div`
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  background-color: white;
  background-color: -moz-field;
  border: 1px solid darkgray;
  box-shadow: 1px 1px 1px 0 lightgray inset;  
  font: -moz-field;
  font: -webkit-small-control;
  margin-top: 5px;
  padding: 2px 3px;
  width: 398px;    
`

function Input({ children, onClick, ...rest }, ref) {
  return (
    <DivStyledAsInput
      ref={ref}
      contentEditable
      {...{ onClick }}
      {...rest}
    >
      {children}
    </DivStyledAsInput>
  )
}

// eslint-disable-next-line no-func-assign
Input = React.forwardRef(Input)

export default Input;