import * as R from 'ramda'
import React from 'react';
// import MQContext from '../MQ/Context';
// import '../mathquill';

function useMathQuill() {
  const [MQ, setMQ] = React.useState(window.MQ)

  const updateMQFromWindowNow = () => {
    setMQ(window.MQ || window.MathQuill.getInterface(2))
  }

  React.useEffect(() => {
    if (!MQ) {
      const intervalHandler = setInterval(updateMQFromWindowNow, 100);
      return function cleanup() {
        clearInterval(intervalHandler)
      }
    }
  })

  return MQ || window.MQ || window.MathQuill.getInterface(2)
}

export default useMathQuill;