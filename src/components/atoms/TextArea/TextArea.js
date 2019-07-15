import React from 'react';
import classes from './TextArea.module.css'

function TextArea({ children }) {
  return (
    <div className={classes.TextArea} contentEditable>
      {children}
    </div>
  )
}

export default TextArea;