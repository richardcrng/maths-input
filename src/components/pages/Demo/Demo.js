import React from 'react';
import MathsInput from '../../molecules/MathsInput/MathsInput';
import useMathQuill from '../../../helpers/use-mathquill/useMathQuill';
import MathsInputEnabler from '../../organism/MathsInputEnabler';
import KeyPad from '../../atoms/KeyPad';
import parseWithKatex from '../../../helpers/parseWithKatex';

function Demo() {
  return (
    <MathsInputEnabler>
      <DemoKeyPad />
    </MathsInputEnabler>
  )
}

function DemoKeyPad() {
  return (
    <KeyPad>
      <KeyPad.Row>
        <KeyPad.Key html={7} />
        <KeyPad.Key html={8} />
        <KeyPad.Key html={8} />
        <KeyPad.Key html="DEL" />
        <KeyPad.Key html="AC" />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={4} />
        <KeyPad.Key html={5} />
        <KeyPad.Key html={6} />
        <KeyPad.Key latex="$\times$" />
        <KeyPad.Key latex="$\dfrac{3}{4}$" />
      </KeyPad.Row>
    </KeyPad>
  )
}

export default Demo;