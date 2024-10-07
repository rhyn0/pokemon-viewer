export const siteConfig = {
    github: {
        link: "https://github.com/rhyn0/pokemon-viewer",
    },
    metadata: {
        title: {
            default: "Pokemon Browser",
            template: "%s | Pokemon Browser",
        },
        description: "Inspect and view Pokemon data",
    },
};

export type SiteConfigType = typeof siteConfig;
