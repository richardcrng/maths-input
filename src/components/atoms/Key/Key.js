import React from 'react';
import classes from './Key.module.css';
import InnerHTML from '../InnerHTML';
import parseWithKatex from '../../../helpers/parseWithKatex';
import { useActiveMathField } from '../../organism/MathsInputEnabler';

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
 * @param {number} props.weight - the weight of the row's width assigned to this key
 * @param {string|string[]} props.write - passed to MathQuill's .write onClick
 * 
 */
function Key({
    component: Component,
    html: htmlFromProps,
    commands = [],
    cmd, keystroke,
    latex,
    write,
    style,
    weight,
    keyRowWeight,
    ...rest
  }) {
  const activeMathField = useActiveMathField()

  const handleEach = ({ cmd, keystroke, write }) => {
    Object.entries({ cmd, keystroke, write }).forEach(([key, val]) => {
      if (!val) return
      Array.isArray(val)
        ? val.forEach(item => activeMathField[key](item))
        : activeMathField[key](val)
    })
  }

  const handleClick = () => {
    if (!activeMathField) return
    commands.forEach(handleEach)
    handleEach({ cmd, keystroke, write })
    activeMathField.focus()
  }

  const html = latex
    ? parseWithKatex(latex)
    : htmlFromProps

  return (
    <button
      className={classes.KeyOuter}
      onClick={handleClick}
      style={{
        width: `${Math.floor(100 * weight / keyRowWeight)}%`,
        ...style
      }}
    >
      <span className={classes.KeyInner}>
        {
          Component
            ? <Component />
            : <InnerHTML html={html} />
        }
      </span>
    </button>
  )
}

export default Key;