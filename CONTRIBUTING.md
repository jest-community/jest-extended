# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this _free_ series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Project setup

1. Fork and clone the repo
2. `$ yarn install` to install dependencies
3. `$ yarn test` to validate you've got it working
4. Create a branch for your PR

## Making changes

- All changes should have unit tests
- Any relevant documentation should be updated
- No linting warnings/errors should be introduced

### New Matchers

- Each matcher should be placed in it's own file inside of the `src/matchers/[matcher].js`.
- A matcher should:
  - Export the matcher in the format expected by Jest. See the docs for an [example](http://facebook.github.io/jest/docs/en/expect.html#expectextendmatchers). Note: the test outcome messages must be a function that returns a string (this caught me out 😉).
- Tests for the matcher should go in `test/matchers/[matcher].test.js` - Test suite that uses the new matcher and make sure it passes.
- Docs for the new matcher should be updated in the API section of the `README.md` to no longer say `Unimplemented`.
- Type definitions for the new matchers should be added to `types/index.d.ts`.

## Committing and Pushing changes

Once you are ready to commit the changes, please use the below commands

1. `git add <files to be comitted>`
2. `git commit -m 'A meaningful message`

_Note: please use present tense in commit messages i.e. `Add feature X` and not ~`Added feature X`~_

## Help needed

Please check out the [issues](https://github.com/jest-community/jest-extended/issues) to discuss any of the potential
work
