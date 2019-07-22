import React from 'react';
import styled from 'styled-components'
import Key from '../Key';
import KeyRow from '../KeyRow';
import addPropsToChildren from '../../../helpers/addPropsToChildren';

const KeyPadDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

function KeyPad({ children, style, when }, ref) {
  if (!when) return null

  const formattedKeyRows = React.Children.map(children,
    ({ type: Child, props: { weight = 1, ...childProps } }) => (
      <Child weight={weight} {...childProps} />
    ))
  
  const keyPadWeight = formattedKeyRows.reduce(
    (acc, { props: { weight } }) => acc + weight, 0
  )

  return (
    <KeyPadDiv
      ref={ref}
      style={style}
    >
      {addPropsToChildren({ keyPadWeight }, formattedKeyRows)}
    </KeyPadDiv>
  )
}

// eslint-disable-next-line no-func-assign
KeyPad = React.forwardRef(KeyPad)
KeyPad.displayName = 'KeyPad'

KeyPad.Row = KeyRow
KeyPad.Key = Key

export default KeyPad;