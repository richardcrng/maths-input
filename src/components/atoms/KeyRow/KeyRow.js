import React from 'react';
import styled from 'styled-components';
import addPropsToChildren from '../../../helpers/addPropsToChildren';

const KeyRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

/**
 * 
 * @param {Object} props
 * @param {number} props.keyPadWeight - accumulated weight from the parent keypad's children
 * @param {number} props.weight - the weight of the keypad's height assigned to this row
 */
function KeyRow({ children, style, weight: rowWeight = 1, keyPadWeight = 1, ...rest }) {
  const formattedKeys = React.Children.map(children,
    ({ type: Child, props: { weight = 1, ...childProps } }) => (
      <Child weight={weight} {...childProps} />
    ))
  
  const keyRowWeight = formattedKeys.reduce(
    (acc, { props: { weight } }) => acc + weight, 0
  )

  return (
    <KeyRowDiv
      style={{
        height: `${Math.floor(100 * rowWeight/keyPadWeight)}%`,
        ...style
      }}
      {...rest}
    >
      {addPropsToChildren({ keyRowWeight }, formattedKeys)}
    </KeyRowDiv>
  )
}

export default KeyRow;