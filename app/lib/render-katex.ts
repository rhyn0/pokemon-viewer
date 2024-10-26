import katex from "katex";
/**
 * @param input Tex string
 * @returns MathML elements to render on a browser page
 */
export function renderKatexToMathML(input: string): string {
    const output = katex.renderToString(input, {
        output: "mathml",
        throwOnError: false,
    });
    return output;
}
