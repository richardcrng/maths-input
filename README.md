

## `MathsInputEnabler`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|Primary content|

## `KeyPad`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`KeyPad.Row`s|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`when`|`boolean`|Whether or not the KeyPad is showing|

## `KeyPad.Row`
### Props
|Name|Type|Description|
|---|---|---|
|`children`|`node`|`KeyPad.Key`s|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `KeyPad.Row`'s height|

## `KeyPad.Key`
### Props
|Name|Type|Description|
|---|---|---|
|`component`|`function`|Component to be rendered|
|`html`|`string`|String to use as inner HTML|
|`latex`|`string`|Dollar delimited LaTeX code|
|`commands`|`Object[]`|[KeyCommands](#KeyCommands) to be processed|
|`style`|`Object`|Inline [`style` object](https://reactjs.org/docs/dom-elements.html#style)|
|`weight`|`number`|Weight for the `KeyPad.Row`'s height|

### KeyCommands
An instruction