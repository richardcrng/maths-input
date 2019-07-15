const REG_EXP_$ = /\$[\S\s]*?\$/g

const parseWithKatex = string => {
  const matches = string.match(REG_EXP_$)
  if (!matches) return string

  const replacements = matches.map(str => katex.renderToString(string.slice(1, -1)))

  return matches.reduce(
    (accStr, matchStr, matchIdx) => accStr.replace(matchStr, replacements[matchIdx]),
    string
  ).join('')

}

export default parseWithKatex