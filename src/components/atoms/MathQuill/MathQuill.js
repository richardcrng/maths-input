import React from 'react';

function MathQuill({
  cssSrc = './mathquill/mathquill.css',
  mathquillSrc = './mathquill/mathquill.js'
} = {}) {
  return (
    <>
      <link rel="stylesheet" href={cssSrc} />
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script type="text/javascript" src={mathquillSrc}></script>
      <script>
        var MQ = MathQuill.getInterface(2);
      </script>
    </>
  )
}

export default MathQuill;