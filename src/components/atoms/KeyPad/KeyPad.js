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

const KeyPadContext = React.createContext()
export const useKeyPadInputRef = () => React.useContext(KeyPadContext).inputRef
export const useKeyPadOnInput = () => React.useContext(KeyPadContext).onInput

/**
 * 
 * @param {Object} props
 * @param {function} props.onInput - (event, { element, mathField })
 * @param {*} ref 
 */
function KeyPad({ className, children, inputRef, onInput, style, when, ...rest }, ref) {
  if (!when) return null

  const formattedKeyRows = React.Children.map(children,
    ({ type: Child, props: { weight = 1, ...childProps } }) => (
      <Child weight={weight} {...childProps} />
    ))
  
  const keyPadWeight = formattedKeyRows.reduce(
    (acc, { props: { weight } }) => acc + weight, 0
  )

  return (
    <KeyPadContext.Provider value={{ inputRef, onInput }}>
      <KeyPadDiv
        ref={ref}
        className={className}
        style={style}
        {...rest}
      >
        {addPropsToChildren({ keyPadWeight }, formattedKeyRows)}
      </KeyPadDiv>
    </KeyPadContext.Provider>
  )
}

// eslint-disable-next-line no-func-assign
KeyPad = React.forwardRef(KeyPad)
KeyPad.displayName = 'KeyPad'

KeyPad.Row = KeyRow
KeyPad.Key = Key

export default KeyPad;