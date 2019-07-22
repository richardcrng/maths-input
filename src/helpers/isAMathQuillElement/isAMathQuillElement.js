import { path } from 'ramda'

const isAMathQuillElement = element => Boolean(
  path(['attributes', 'mathquill-block-id'], element) || path(['attributes', 'mathquill-command-id'])
)

export default isAMathQuillElement