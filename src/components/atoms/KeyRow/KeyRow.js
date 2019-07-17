import React from 'react';
import classes from './KeyRow.module.css';

function KeyRow({ children, style }) {
  return (
    <div className={classes.KeyRow} style={style}>
      {children}
    </div>
  )
}

export default KeyRow;