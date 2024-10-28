/**
 *
 * @type {import('plop').PlopGenerator}
 */
const feautreGenerator = {
    description: "Story Generator",
    prompts: [
        {
            type: "input",
            name: "name",
            message: "feature name",
        },
    ],
    actions: () => {
        const generatePath = "app/features";
        return [
            {
                type: "add",
                path: `${generatePath}/{{kebabCase name}}/types.ts`,
                templateFile: "generators/feature/types.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase name}}/api/keys.ts`,
                templateFile: "generators/feature/api.keys.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase name}}/api/get-{{ kebabCase name }}.ts`,
                templateFile: "generators/feature/api.feature-get.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase name}}/api/list-{{ kebabCase name }}.ts`,
                templateFile: "generators/feature/api.feature-list.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase name}}/hooks/use-list-{{ kebabCase name }}.tsx`,
                templateFile: "generators/feature/hooks.feature-list.tsx.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase name}}/hooks/use-get-{{ kebabCase name }}.tsx`,
                templateFile: "generators/feature/hooks.feature-get.tsx.hbs",
            },
        ];
    },
};
export default feautreGenerator;
