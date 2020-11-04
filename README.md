# README Inquirer Generator

## Description
_What is this about_

  A README generator that make a Good README for a new project

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
* [Credits](#credits)
* [License](#license)

## Installation

### While in Git Bash

To generate your own README,

First go to [README Inquirer Generator Repository](https://github.com/shelb-doc/README-Inquirer-Gen)
Then Pull Down the Repo into your machine. Click here to see how that is done [Clone a repository from GitHub](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository)

Next run `npm install` in order to install the following npm package dependencies.

* [`inquirer`](https://www.npmjs.com/package/inquirer)
* [`axios`](https://www.npmjs.com/package/axios)

Then run the application with the command `node index.js`.

## Usage

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses `axios` to fetch your GitHub profile from the [GitHub API](https://docs.github.com/en/free-pro-team@latest/rest), including your GitHub profile picture (avatar).

From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts.
The README will also include badges for your GitHub repo.

Finally, `fs.writeFile` is used to generate your project's README.md file. Check out the [`ExampleREADME.md`]() in this repo as an example.

## Methodology

The application utilizes modules by separating the GitHub API call and generation of the markdown into separate modules: `api.js` and `generateMarkdown.js`, respectively, inside the `utils` folder.

The application also utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including `arrow functions`, `const`, `let`, template literals, and `async/await` to handle the `inquirer`, `axios`, and `fs.writeFile` promises.

## Credits

Thank you to my cat Mimikyu for being my Rubber Ducky.

As well As

* [Beth Presten](https://github.com/bethpresten)
* [Estefania Lupo](https://github.com/lain7891)

For helping me with the last part of the puzzle.

## License

Licensed under the [MIT](LICENSE.txt) license.

---
