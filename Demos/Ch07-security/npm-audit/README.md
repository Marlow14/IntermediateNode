# Chapter 1 Demo: npm audit

## Objectives:
* Walk through steps to update a project with security vulnerabilities

## Steps

1. This is a project which has security vulnerabilities. Copy this project to your `WIP` directory to make changes that will not be tracked. Do all of your work in this new `WIP\npm-audit` directory. 

1. Confirm your npm verson is > 6. From command prompt issue `npm -v`

    If it is out of ate you can update npm using `npm i npm@latest -g`

1. Take a look at the dependencies in `package.json`. Write down the version of mocha. 

1. Try to do an npm install and note the warnings about deprecations and vulnerabilities.

1. Do an `npm audit` to find out more details.

1. Read the output. Notice the given command will update mocha and there is a warning that with semantic versioning, there is potentially a breaking change.
What are the 3 vulnerabilities?

1. Now run `npm audit fix` - notice why this action is blocked. 

1. Run this command again, passing the specified flag to install breaking changes.

1. Open package.json, what version is mocha now?

1. You can also check for outdated packages in general. Try the command `npm outdated`.

1. Make note of the versions of nyc. Use `npm update`. This is a strict update, it will follow your semver rules in package.json.