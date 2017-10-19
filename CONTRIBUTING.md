# Contributing

Thanks for being willing to contribute!

**Working on your first Pull Request?** You can learn how from this *free* series
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

## Committing and Pushing changes

Once you are ready to commit the changes, please use the below commands

1. `git add <files to be comitted>`
2. `git commit -m 'A meaningful message`

*Note: please use present tense in commit messages i.e. `Add feature X` and not ~`Added feature X`~*

## Add yourself as a contributor

This project follows the [all contributors](https://github.com/kentcdodds/all-contributors)
specification. To add yourself to the table of contributors on the README.md, please use
the automated script as part of your PR:

```console
yarn contributor <YOUR_GITHUB_USERNAME>
```

Follow the prompt. If you've already added yourself to the list and are making a
new type of contribution, you can run it again and select the added contribution
type. If you need to edit the `.all-contributorsrc` file by hand that's fine
too, just run `yarn contributor:generate` to regenerate the table

## Help needed

Please checkout the [ROADMAP](docs/ROADMAP.md) and raise an issue to discuss
any of the items