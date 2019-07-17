import React from 'react';
import classes from './KeyRow.module.css';

/**
 * 
 * @param {Object} props
 * @param {number} props.weight - The weight of the row's height assigned to this row
 */
function KeyRow({ children, style, weight }) {
  return (
    <div className={classes.KeyRow} style={style}>
      {children}
    </div>
  )
}

export default KeyRow;