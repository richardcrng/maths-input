import React from 'react';
import classes from './KeyRow.module.css';
import addPropsToChildren from '../../../helpers/addPropsToChildren';

/**
 * 
 * @param {Object} props
 * @param {number} props.keyPadWeight - accumulated weight from the parent keypad's children
 * @param {number} props.weight - the weight of the keypad's height assigned to this row
 */
function KeyRow({ children, style, weight: rowWeight = 1, keyPadWeight = 1 }) {
  const formattedKeys = React.Children.map(children,
    ({ type: Child, props: { weight = 1, ...childProps } }) => (
      <Child weight={weight} {...childProps} />
    ))
  
  const keyRowWeight = formattedKeys.reduce(
    (acc, { props: { weight } }) => acc + weight, 0
  )

  return (
    <div
      className={classes.KeyRow}
      style={{
        height: `${Math.floor(100 * rowWeight/keyPadWeight)}%`,
        ...style
      }}
    >
      {addPropsToChildren({ keyRowWeight }, formattedKeys)}
    </div>
  )
}

export default KeyRow;