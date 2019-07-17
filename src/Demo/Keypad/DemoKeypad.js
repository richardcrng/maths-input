import React from 'react';
import { MdArrowBack, MdArrowDownward, MdArrowForward, MdArrowUpward, MdSend } from 'react-icons/md';
import KeyPad from '../../components/atoms/KeyPad';

function DemoKeypad({ style, when, ...rest }) {
  return (
    <KeyPad {...{ style, when, ...rest }}>
      <KeyPad.Row weight={0.5}>
        <KeyPad.Key component={MdArrowBack} keystroke="Left" />
        <KeyPad.Key component={MdArrowForward} keystroke="Right" />
        <KeyPad.Key component={MdArrowUpward} keystroke="Up" />
        <KeyPad.Key component={MdArrowDownward} keystroke="Down" />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key latex='$\square^{\square}$' cmd='^' />
        <KeyPad.Key
          latex='$\sqrt[\square]{\square}$'
          commands={[{ write: '\\sqrt[]{}' }, { keystroke: ['Left', 'Left'] }]}
        />
        <KeyPad.Key latex='$e$' write='e' />
        <KeyPad.Key latex='$x$' write='x' />
        <KeyPad.Key latex='$y$' write='y' />
        <KeyPad.Key latex='$z$' write='z' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key latex='$\square^{2}$' cmd='^2' />
        <KeyPad.Key latex='$\sqrt{\square}$' cmd='\sqrt' />
        <KeyPad.Key latex='$k$' write='k' />
        <KeyPad.Key latex='$n$' write='n' />
        <KeyPad.Key latex='$($' write='(' />
        <KeyPad.Key latex='$)$' write=')' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={7} cmd='7' />
        <KeyPad.Key html={8} cmd='8' />
        <KeyPad.Key html={8} cmd='9' />
        <KeyPad.Key html="DEL" keystroke='Backspace' />
        <KeyPad.Key html="AC" keystroke={['Ctrl-A', 'Backspace']} />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={4} cmd='4' />
        <KeyPad.Key html={5} cmd='5' />
        <KeyPad.Key html={6} cmd='6' />
        <KeyPad.Key latex="$\times$" cmd='\times' />
        <KeyPad.Key latex="$\dfrac{\square}{\square}$" cmd='\frac' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={1} cmd='1' />
        <KeyPad.Key html={2} cmd='2' />
        <KeyPad.Key html={3} cmd='3' />
        <KeyPad.Key latex="$+$" cmd='+' />
        <KeyPad.Key latex="$-$" cmd='-' />
      </KeyPad.Row>
      <KeyPad.Row>
        <KeyPad.Key html={0} cmd='0' />
        <KeyPad.Key latex="$.$" cmd='.' />
        <KeyPad.Key latex="$,$" cmd=',' />
        <KeyPad.Key component={MdSend} weight={2} />
      </KeyPad.Row>
    </KeyPad>
  )
}

export default DemoKeypad;