import React from 'react';
import classes from './Input.module.css'

function Input({ children, onClick, ...rest }, ref) {
  return (
    <div
      ref={ref}
      className={classes.Input}
      contentEditable
      {...{ onClick }}
      {...rest}
    >
      {children}
    </div>
  )
}

// eslint-disable-next-line no-func-assign
Input = React.forwardRef(Input)

export default Input;