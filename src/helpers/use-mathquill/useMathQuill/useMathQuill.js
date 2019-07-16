import * as R from 'ramda'
import React from 'react';
// import MQContext from '../MQ/Context';
// import '../mathquill';

function useMathQuill() {
  const [MQ, setMQ] = React.useState(window.MQ || {})

  React.useEffect(() => {
    if (!MQ) {
      const timeoutHandler = setTimeout(() => {
        setMQ(window.MQ || window.MathQuill.getInterface(2) || {})
      }, 100);

      return function cleanup() {
        clearTimeout(timeoutHandler)
      }
    }
  }, [MQ, setMQ])

  return MQ
}

export default useMathQuill;