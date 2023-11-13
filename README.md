# Flexion

This is a [T3 Stack](https://create.t3.gg) project bootstrapped with `create-t3-app`. It was created as a coding challenge which is part of a job application.

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

## Okay cool, but how does it work?

This application allows the user (a science teacher) to enter questions from a "Unit Conversion" worksheet, along with a student's answers, in order to determine whether those answers are correct or incorrect. The available fields in the application are as follows:

1. Input value: The value from a worksheet question (e.g. 84.2)
1. Units from: The type of unit for the input value (e.g. Fahrenheit)
1. Units to: The type of unit to convert that input value to (e.g. Rankine)
1. Output value: The value that the student gave as an answer (e.g. 543.94)

There is a status message that appears below these fields, which should direct the user or give feedback based on the current values entered. For example, entering the values mentioned above will display a green "Correct" message along with an explanation of why it is correct - in this case, 84.2 Fahrenheit = 543.9 Rankine

### Aha! What's with the rounding error?

Since many of these conversions can be difficult floating-point arithmetic, both the actual answer and the student's input answer will be rounded to the nearest tenths place before comparing to determine whether their answer is correct.

### Why am I getting this weird "Invalid" message?

As there are multiple **_types_** of units to convert between (i.e. temperatures & volumes), some combinations of "units from" and "units to" aren't allowed. It doesn't make sense to convert a number from gallons to Kelvin, for example!

## Potential improvements

1. Do an accessibility pass - add aria attributes, verify keyboard usability, test screen readers, etc.
1. Add a light mode/dark mode alternative
1. Add the ability to enter multiple questions and answers, and display an overall "score" (# correct / # incorrect \* 100%)
1. Add the ability to enter questions separately from answers (and save them), so the user can keep track of multiple worksheets without having to re-enter the questions for every student
1. Allow users to expand the list of potential units and provide conversion formulas
