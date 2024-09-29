# Pokemon Viewer
Frontend to visualize PokeAPI data.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Node Version Management

The [`.nvmrc`](./.nvmrc) references a version of **NodeJS** that this project uses. At this moment the contents are a loosely pinned to latest LTS version. It is suggested to enforce a stricter pin after cloning.

## Code Quality

Linting and formatting is handled by [biome](https://biomejs.dev/). The config for it lives in [`biome.json`](./biome.json).

Biome is a linter and formatter written in Rust - so it is quite speedy.

## Pre-Commit

Code quality is upheld by using git's pre-commit hooks - `husky` is the recommendation. By installing these, the linting formatting and static analysis tools that are pre-configured will be run on every commit. And to escape them on a specific commit, one can `git commit -m "hacky commit" --no-verify`.

To install: `npm add -D husky`

To setup the hook: `npx husky init`

More info [here](https://typicode.github.io/husky/get-started.html).

## CI / GitHub Actions

`ci.yaml` runs `lint` command and `lint:types` which I usually configure to `tsc --noEmit`.

## Environment Variables

Most frameworks nowadays have ways of loading a `.env` file into runtime for Environment variables. Or can install [dotenv](https://www.npmjs.com/package/dotenv). I usually have some custom rules in [`.gitignore`](.gitignore) to ignore all suffixed `.env` files except a `.env.template` where I have the names and can put fake values to make cloning and getting started easier.