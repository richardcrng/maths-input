import React from 'react';
import MathsInput from '../../molecules/MathsInput/MathsInput';
import useMathQuill from '../../../helpers/use-mathquill/useMathQuill';

function Demo() {
  const ref = React.useRef()
  const MQ = useMathQuill()

  React.useEffect(() => {
    const timeoutHandler = setTimeout(() => {
      MQ(ref.current).write('\\frac{2}{3}')
    }, 1000);

    return function cleanup() {
      clearTimeout(timeoutHandler)
    }
  })

  return (
    <>
      <MathsInput ref={ref} />
    </>
  )
}

export default Demo;