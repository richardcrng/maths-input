# Setup

```bash
npm install --s react-maths
```

```js
import React from 'react';
import { MathsEnabler, MathsInput, MathsKeypad } from 'react-maths'

function App() {
  return (
    <MathsEnabler>
      <MathsInput />
      <MathsKeypad>
        <MathsKeypad.Row>
          <MathsKeypad.Key latex='7' cmd='7' />
          <MathsKeypad.Key latex='8' cmd='8' />
          <MathsKeypad.Key latex='$+$' cmd='+' />
          <MathsKeypad.Key latex='$\times$' cmd='\times' />
        </MathsKeypad.Row>
      </MathsKeypad>
    </MathsEnabler>
  )
}
```

# Components

## `MathsEnabler`
A `<MathsEnabler />` is a top-level component that:
- Makes [`react-maths`'s hooks](#hooks) available to nested components; and
- Thereby allows a nested [`MathsKeypad`](#mathskeypad) to provide a nested [`MathsInput`] with input.

### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|Primary content|

## `MathsInput`

## `MathsKeypad`
### Props
|Name (<sup>*</sup> Optional)|Type|Description|
|---|---|---|
|`children`<sup>*</sup>|`node`|`MathsKeypad.Row`s|
|`inputRef`<sup>*</sup>|`React.MutableRefObject`|The [React ref](https://reactjs.org/docs/refs-and-the-dom.html) attached to the [`MathsInput`](#mathsinput) which the keypad should create input for|
|`style`<sup>*</sup>|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`when`<sup>*</sup>|`boolean`|Whether or not the MathsKeypad is showing|

## `MathsKeypad.Row`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`MathsKeypad.Key`s|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `MathsKeypad.Row`'s height|

## `MathsKeypad.Key`
### Props
|Name|Type|Description|
|---|---|---|
|`component`|`function`|Component to be rendered|
|`html`|`string`|String to use as inner HTML|
|`latex`|`string`|Dollar delimited LaTeX code|
|`commands`|`Object[]`|[KeyCommands](#keycommands) to be processed|
|`cmd`|`string`|Passed to MathQuill's [`cmd`](http://docs.mathquill.com/en/latest/Api_Methods/#cmdlatex_string) method for the current [`MathsInput`](#mathsinput)|
|`keystroke`|`string`|Passed to MathQuill's [`keystroke`](http://docs.mathquill.com/en/latest/Api_Methods/#keystrokekeys) method for the current [`MathsInput`](#mathsinput)|
|`write`|`string`|Passed to MathQuill's [`write`](http://docs.mathquill.com/en/latest/Api_Methods/#writelatex_string) method for the current [`MathsInput`](#mathsinput)|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `MathsKeypad.Key`'s width|

#### KeyCommands
|Key|Value Type|Description|
|---|---|---|
|`cmd`|`string`|Passed to MathQuill's [`cmd`](http://docs.mathquill.com/en/latest/Api_Methods/#cmdlatex_string) method for the current [`MathsInput`](#mathsinput)|
|`keystroke`|`string`|Passed to MathQuill's [`keystroke`](http://docs.mathquill.com/en/latest/Api_Methods/#keystrokekeys) method for the current [`MathsInput`](#mathsinput)|
|`write`|`string`|Passed to MathQuill's [`write`](http://docs.mathquill.com/en/latest/Api_Methods/#writelatex_string) method for the current [`MathsInput`](#mathsinput)|


# Hooks
