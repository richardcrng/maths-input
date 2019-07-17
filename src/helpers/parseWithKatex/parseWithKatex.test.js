import parseWithKatex from ".";

describe('GIVEN the string "$x = 3$"', () => {
  const string = '$x = 3$'

  describe('WHEN it is passed to parseWithKatex', () => {
    const result = parseWithKatex(string)

    test('THEN the result is a string representing a span with katex formatting', () => {
      const expectedResult = `<span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">x = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">3</span></span></span></span>`
      expect(result).toBe(expectedResult)
    })
  })
})

describe('GIVEN the string "$\\dfrac{3}{4}$"', () => {
  const string = '$\\dfrac{3}{4}$'

  describe('WHEN it is passed to parseWithKatex', () => {
    const result = parseWithKatex(string)

    test('THEN the result is a string representing a span with katex formatting', () => {
      const expectedResult = `<span class=\"katex\"><span class=\"katex-mathml\"><math><semantics><mrow><mstyle displaystyle=\"true\" scriptlevel=\"0\"><mfrac><mn>3</mn><mn>4</mn></mfrac></mstyle></mrow><annotation encoding=\"application/x-tex\">\\dfrac{3}{4}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"base\"><span class=\"strut\" style=\"height:2.00744em;vertical-align:-0.686em;\"></span><span class=\"mord\"><span class=\"mopen nulldelimiter\"></span><span class=\"mfrac\"><span class=\"vlist-t vlist-t2\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:1.32144em;\"><span style=\"top:-2.314em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">4</span></span></span><span style=\"top:-3.23em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"frac-line\" style=\"border-bottom-width:0.04em;\"></span></span><span style=\"top:-3.677em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord\">3</span></span></span></span><span class=\"vlist-s\">​</span></span><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.686em;\"><span></span></span></span></span></span><span class=\"mclose nulldelimiter\"></span></span></span></span></span>`
      expect(result).toBe(expectedResult)
    })
  })
})

describe('GIVEN the string "When $x = 3$" and $y = 2$', () => {
  const string = 'When $x = 3$ and $y = 2$'

  describe('WHEN it is passed to parseWithKatex', () => {
    const result = parseWithKatex(string)

    test('THEN the result is text interspersed with spans with katex formatting', () => {
      const expectedResult = `When <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>x</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding="application/x-tex">x = 3</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault">x</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">3</span></span></span></span> and <span class="katex"><span class="katex-mathml"><math><semantics><mrow><mi>y</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">y = 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.19444em;"></span><span class="mord mathdefault" style="margin-right:0.03588em;">y</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">2</span></span></span></span>`
      expect(result).toBe(expectedResult)
    })
  })
})