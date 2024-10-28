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
        {
            type: "input",
            name: "folderName",
            message: "folder name",
        },
    ],
    actions: () => {
        const generatePath = "app/features";
        return [
            {
                type: "add",
                path: `${generatePath}/{{kebabCase folderName}}/types.ts`,
                templateFile: "generators/feature/types.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase folderName}}/api/keys.ts`,
                templateFile: "generators/feature/api.keys.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase folderName}}/api/get-{{ kebabCase name }}.ts`,
                templateFile: "generators/feature/api.feature-get.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase folderName}}/api/list-{{ kebabCase name }}.ts`,
                templateFile: "generators/feature/api.feature-list.ts.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase folderName}}/hooks/use-list-{{ kebabCase name }}.tsx`,
                templateFile: "generators/feature/hooks.feature-list.tsx.hbs",
            },
            {
                type: "add",
                path: `${generatePath}/{{kebabCase folderName}}/hooks/use-get-{{ kebabCase name }}.tsx`,
                templateFile: "generators/feature/hooks.feature-get.tsx.hbs",
            },
        ];
    },
};
export default feautreGenerator;
