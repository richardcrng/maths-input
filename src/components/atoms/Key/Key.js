import React from 'react';
import styled from 'styled-components'
import InnerHTML from '../InnerHTML';
import parseWithKatex from '../../../helpers/parseWithKatex';
import { useActiveMathField, useActiveHtmlElement } from '../../organism/MathsEnabler';
import { useKeyPadInputRef, useKeyPadOnInput } from '../KeyPad';
import useMathQuill from '../../../helpers/use-mathquill/useMathQuill';

const KeyOuter = styled.button`
  height: 100%;
  background-color: white;
  color: black;
  display: inline-block;
  justify-content: center;
  cursor: pointer;
`
const KeyInner = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%
`


/**
 * 
 * @param {Object} props
 * @param {Object[]} props.commands
 * @param {string|string[]} props.cmd - passed to MathQuill's .cmd onClick
 * @param {function} props.component - component to render inside KeyInner
 * @param {string} props.html
 * @param {number} props.keyRowWeight - accumulated weight from the parent row's children
 * @param {string|string[]} props.keystroke - passed to MathQuill's .keystrong onClick
 * @param {string} props.latex
 * @param {function} props.onClick
 * @param {number} props.weight - the weight of the row's width assigned to this key
 * @param {string|string[]} props.write - passed to MathQuill's .write onClick
 * 
 */
function Key({
    component: Component,
    html: htmlFromProps,
    commands = [],
    cmd,
    keystroke,
    latex,
    onClick,
    style,
    write,
    weight,
    keyRowWeight,
    ...rest
  }) {
  const MQ = useMathQuill()
  const keyPadInputRef = useKeyPadInputRef() || {}
  const keyPadInputElement = keyPadInputRef.current
  const KeyPadMathField = MQ(keyPadInputElement)
  const activeHtmlElement = useActiveHtmlElement()
  const activeMathField = useActiveMathField()
  const onInput = useKeyPadOnInput()

  const element = keyPadInputElement || activeHtmlElement
  const mathField = KeyPadMathField || activeMathField

  const handleEach = ({ cmd, keystroke, write }) => {
    Object.entries({ cmd, keystroke, write }).forEach(([key, val]) => {
      if (!val) return
      Array.isArray(val)
        ? val.forEach(item => activeMathField[key](item))
        : activeMathField[key](val)
    })
  }

  const handleClick = (e) => {
    if (onClick) return onClick(e)
    if (!mathField) return
    commands.forEach(handleEach)
    handleEach({ cmd, keystroke, write })
    mathField.focus()
    if (onInput) onInput(e, { element, mathField })
  }

  const html = latex
    ? parseWithKatex(latex)
    : htmlFromProps

  return (
    <KeyOuter
      onClick={handleClick}
      style={{
        width: `${Math.floor(100 * weight / keyRowWeight)}%`,
        ...style
      }}
    >
      <KeyInner>
        {
          Component
            ? <Component />
            : <InnerHTML html={html} />
        }
      </KeyInner>
    </KeyOuter>
  )
}

export default Key;