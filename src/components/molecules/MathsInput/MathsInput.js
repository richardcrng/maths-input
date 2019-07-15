import React from 'react';
import Input from '../../atoms/Input';
import Maths from '../../atoms/Maths';

function MathsInput({ children, onClick, rest }, ref) {

  return (
    <Input
      ref={ref}
      {...{ onClick }}
      {...rest}
    >
      <Maths>
        {children}
      </Maths>
    </Input>
  )
}

// eslint-disable-next-line no-func-assign
MathsInput = React.forwardRef(MathsInput)

export default MathsInput;