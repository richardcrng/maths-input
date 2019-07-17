import katex from 'katex'

const REG_EXP_$ = /\$[\S\s]*?\$/g

const parseWithKatex = (string = '') => {
  const matches = string.match(REG_EXP_$)
  if (!matches) return string

  const replacements = matches.map(str => katex.renderToString(str.slice(1, -1)))

  console.log(matches, replacements)

  return matches.reduce(
    (accStr, matchStr, matchIdx) => accStr.replace(matchStr, replacements[matchIdx]),
    string
  )
}

export default parseWithKatex