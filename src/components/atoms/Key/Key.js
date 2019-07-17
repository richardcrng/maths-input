import React from 'react';
import classes from './Key.module.css';
import InnerHTML from '../InnerHTML';

function Key({ html }) {
  return (
    <button
      className={classes.KeyOuter}
    >
      <span className={classes.KeyInner}>
        <InnerHTML html={html} />
      </span>
    </button>
  )
}

export default Key;