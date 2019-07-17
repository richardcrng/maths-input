import React from 'react';
import classes from './KeyPad.module.css'
import Key from '../Key';
import KeyRow from '../KeyRow';

function KeyPad({ children, style }) {
  return (
    <div className={classes.KeyPad} style={style}>
      {React.Children.map(children, ({ type: Child, props: { childStyle, ...childProps } }) => {
        return (
          <Child
            style={{
              height: `${Math.floor(100 / children.length)}%`,
              ...childStyle
            }}
            {...childProps}
          />
        )
      })}
    </div>
  )
}

KeyPad.Row = KeyRow
KeyPad.Key = Key

export default KeyPad;