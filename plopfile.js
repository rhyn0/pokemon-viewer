import storyGenerator from "./generators/story/index.js";

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
export default function plopTemplate(plop) {
    plop.setGenerator("story", storyGenerator);
}
