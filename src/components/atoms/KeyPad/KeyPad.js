import React from 'react';
import classes from './KeyPad.module.css'
import Key from '../Key';
import KeyRow from '../KeyRow';
import addPropsToChildren from '../../../helpers/addPropsToChildren';

function KeyPad({ children, style: propsStyle, when }) {
  const style = when
    ? propsStyle
    // : { ...style, display: 'none' }
    : propsStyle

  const formattedKeyRows = React.Children.map(children,
    ({ type: Child, props: { weight = 1, ...childProps } }) => (
      <Child weight={weight} {...childProps} />
    ))
  
  const keyPadWeight = formattedKeyRows.reduce(
    (acc, { props: { weight } }) => acc + weight, 0
  )

  return (
    <div
      className={classes.KeyPad}
      style={style}
    >
      {addPropsToChildren({ keyPadWeight }, formattedKeyRows)}
    </div>
  )
}

KeyPad.Row = KeyRow
KeyPad.Key = Key

export default KeyPad;