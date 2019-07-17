import React from 'react';
import classes from './Key.module.css';
import InnerHTML from '../InnerHTML';
import parseWithKatex from '../../../helpers/parseWithKatex';

function Key({ html: htmlFromProps, latex }) {
  const html = latex
    ? parseWithKatex(latex)
    : htmlFromProps

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