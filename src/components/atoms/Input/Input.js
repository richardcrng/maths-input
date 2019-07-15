import React from 'react';
import classes from './Input.module.css'

function Input({ children }) {
  return (
    <div className={classes.Input} contentEditable>
      {children}
    </div>
  )
}

export default Input;