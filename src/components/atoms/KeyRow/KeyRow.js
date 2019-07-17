import React from 'react';
import classes from './KeyRow.module.css';

/**
 * 
 * @param {Object} props
 */
function KeyRow({ children, style }) {
  return (
    <div className={classes.KeyRow} style={style}>
      {React.Children.map(children, ({ type: Child, props: { childStyle, ...childProps } }) => {
        return (
          <Child
            style={{
              width: `${Math.floor(100 / children.length)}%`,
              ...childStyle
            }}
            {...childProps}
          />
        )
      })}
    </div>
  )
}

export default KeyRow;