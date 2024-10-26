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
    ],
    actions: () => {
        const generatePath = "testing/stories";
        return [
            {
                type: "add",
                path: `${generatePath}/{{properCase name}}.stories.tsx`,
                templateFile: "generators/story/component.stories.tsx.hbs",
            },
        ];
    },
};
export default storyGenerator;
