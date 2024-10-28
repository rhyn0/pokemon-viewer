import path from "node:path";
import fs from "node:fs";

const featuresDir = path.join(process.cwd(), "app/features");
const features = fs.readdirSync(featuresDir);

/**
 *
 * @type {import('plop').PlopGenerator}
 */
const storyGenerator = {
    description: "Story Generator",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "component name",
        },
        {
            type: "list",
            name: "feature",
            message: "Which feature does this component belong to?",
            choices: ["components", ...features],
            default: 0,
            when: () => features.length > 0,
        },
        {
            type: "input",
            name: "folder",
            message: "folder in components",
            when: ({ feature }) => !feature || feature === "components",
        },
    ],
    actions: (answers) => {
        const srcFolder =
            !answers.feature || answers.feature === "components"
                ? `components/${answers.folder}`
                : `features/${answers.feature}`;
        const generatePath =
            !answers.feature || answers.feature === "components"
                ? "testing/stories/components/{{folder}}"
                : "testing/stories/features/{{feature}}";
        return [
            {
                type: "add",
                path: `${generatePath}/{{properCase name}}.stories.tsx`,
                templateFile: "generators/story/component.stories.tsx.hbs",
                data: {
                    srcFolder,
                },
            },
        ];
    },
};
export default storyGenerator;
