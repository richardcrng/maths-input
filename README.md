# Components

## `MathsEnabler`
A `<MathsEnabler />` is a top-level component that:
- Makes [`maths-input`'s hooks](#hooks) available to nested components; and
- Thereby allows a nested [`MathsKeypad`](#mathskeypad) to provide a nested [`MathsInput`].

### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|Primary content|

### Example
```js
import React from 'react';
import { MathsInputEnabler, MathsInput }
```

## `MathsInput`

## `MathsKeypad`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`MathsKeypad.Row`s|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`when`|`boolean`|Whether or not the MathsKeypad is showing|

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
