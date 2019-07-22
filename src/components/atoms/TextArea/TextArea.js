import React from 'react';
import styled from 'styled-components';

const DivAsTextArea = styled.div`
  -moz-appearance: textfield-multiline;
  -webkit-appearance: textarea;
  border: 1px solid gray;
  font: medium -moz-fixed;
  font: -webkit-small-control;
  height: 28px;
  overflow: auto;
  padding: 2px;
  resize: both;
  width: 400px;
`

function TextArea({ children }) {
  return (
    <DivAsTextArea contentEditable>
      {children}
    </DivAsTextArea>
  )
}

export default TextArea;