import React from 'react';

const addPropsToChildren = (propsToAdd, children, overwrite = true) => React.Children.map(
  children,
  ({ type: Child, props }) => overwrite
    ? <Child {...props} {...propsToAdd} />
    : <Child {...propsToAdd} {...props} />
)

export default addPropsToChildren