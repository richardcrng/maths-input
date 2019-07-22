import React from 'react';
import useMathQuillMathField from '../../../helpers/use-mathquill/useMathQuill/MathField';

function MathsInput({ id, onBlur, onClick, onFocus, style, ...rest }, ref) {
  useMathQuillMathField(ref)

  return (
    <span
      ref={ref}
      {...{ id, onBlur, onClick, onFocus, style }}
      {...rest}
    />
  )
}

// eslint-disable-next-line no-func-assign
MathsInput = React.forwardRef(MathsInput)
MathsInput.displayName = 'MathsInput'

export default MathsInput;