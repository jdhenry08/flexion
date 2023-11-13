# Flexion

This is a [T3 Stack](https://create.t3.gg) project bootstrapped with `create-t3-app`. It was created as a coding challenge as part of a job application.

It is deployed via [Vercel](https://vercel.com) and available at https://flexion.vercel.app.

## How do I run this locally?

As a Next.js application, running this locally should be relatively simple. These steps assume you already have a working React dev environment, including node, Typescript, and a package manager. If you're running from the included dev container spec, these should all be included (and you can skip the first three steps).

1. Clone the repo<br>
   `git clone https://github.com/jdhenry08/flexion.git`

1. Enter the project directory<br>
   `cd flexion`

1. Download dependencies<br>
   `npm install` | `yarn install` | `pnpm install`

1. Run the dev server<br>
   `npm run dev` | `yarn dev` | `pnpm dev`

## What about deploying?

Any commits to the `main` branch will automatically trigger a redeploy, and commits to other branches will automatically build a preview site for test/staging.

If this were a real application, we could lock down direct commits to `main` such that only PRs are allowed to modify that branch. This would allow us to enforce dev in separate branches, after which a PR could require code review, peer signoff, automated test validation, etc.

Unfortunately, much of that functionality is locked behind a paid Github subscription, and thus is not configured as part of this repo. You imagination will have to suffice.
