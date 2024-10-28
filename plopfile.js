import storyGenerator from "./generators/story/index.js";
import featureGenerator from "./generators/feature/index.js";

/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
export default function plopTemplate(plop) {
    plop.setGenerator("story", storyGenerator);
    plop.setGenerator("feature", featureGenerator);
}
