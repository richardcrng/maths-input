import React from 'react';
import KeyPad from '../../components/atoms/KeyPad';

function DemoKeypad() {
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
      <KeyPad.Row>
        <KeyPad.Key html={1} />
        <KeyPad.Key html={2} />
        <KeyPad.Key html={3} />
        <KeyPad.Key latex="$+$" />
        <KeyPad.Key latex="$-$" />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={0} />
        <KeyPad.Key latex="$.$" />
        <KeyPad.Key latex="$,$" />
      </KeyPad.Row>
    </KeyPad>
  )
}

export default DemoKeypad;