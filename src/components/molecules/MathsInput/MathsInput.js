import * as R from 'ramda'
import React from 'react';
import useMathQuillMathField from '../../../helpers/use-mathquill/useMathQuill/MathField';
import { useSetActiveHtmlElement } from '../../organism/MathsEnabler';

function MathsInput({ id, onBlur, onClick, onFocus, setActiveOnClick = true, style, ...rest }, refFromProps) {
  const refState = React.useRef()
  const ref = R.defaultTo(refFromProps, refState)

  useMathQuillMathField(ref)
  const setActive = useSetActiveHtmlElement()

  return (
    <span
      ref={ref}
      onClick={(e) => {
        if (setActiveOnClick) setActive(ref.current)
        if (typeof onClick === 'function') onClick(e)
      }}
      {...{ id, onBlur, onFocus, style }}
      {...rest}
    />
  )
}

// eslint-disable-next-line no-func-assign
MathsInput = React.forwardRef(MathsInput)
MathsInput.displayName = 'MathsInput'

export default MathsInput;