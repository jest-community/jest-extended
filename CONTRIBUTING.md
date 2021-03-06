# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Project setup

1. Fork and clone the repo
2. `$ yarn install` to install dependencies
3. `$ yarn test` to validate you've got it working
4. Create a branch for your PR

## Here as part of Hacktoberfest?

Head over to [here](https://hacktoberfest.digitalocean.com/sign_up/register) to signup if you haven't already

## Making changes

- All changes should have unit tests
- Any relevant documentation should be updated
- No linting warnings/errors should be introduced

### New Matchers

- Each matcher should be placed in it's own directory inside of the `matchers` directory.
- A matcher directory should contain the following:
  - `index.js` - An export of the matcher in the format expected by Jest. See the docs for an [example](http://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers). Note: the test outcome messages must be a function that returns a string (this caught me out 😉).
  - `index.test.js` - Test suite that uses the new matcher and make sure it passes.
  - `predicate.js` - The function that tests the actual value meets the expected value / behavior.
  - `predicate.test.js` - Tests for the predicate both true/false cases must be covered.
- [`jest-matchers-utils`](https://github.com/facebook/jest/tree/master/packages/jest-matcher-utils) is being used for syntax highlighting of error messages.
  - See the Jest docs for an [example usage](https://facebook.github.io/jest/docs/en/expect.html#thisutils)
- Jest's [`expect`](https://github.com/facebook/jest/tree/master/packages/expect) package is being used to access their deep `equals` function.
  - `import { equals } from 'expect/build/jasmineUtils';`
- Docs for the new matcher should be updated in the API section of the `README.md` to no longer say `Unimplemented`.
- Type definitions for the new matchers should be added to `types/index.d.ts`.

## Committing and Pushing changes

Once you are ready to commit the changes, please use the below commands

1. `git add <files to be comitted>`
2. `git commit -m 'A meaningful message`

_Note: please use present tense in commit messages i.e. `Add feature X` and not ~`Added feature X`~_

## Help needed

Please checkout the [ROADMAP](docs/ROADMAP.md) and raise an issue to discuss
any of the items
