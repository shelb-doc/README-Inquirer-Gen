

// function to generate markdown for README
function generateMarkdown(data) {
  return (`# ${data.title}         ![License](${license}\n\n` +
  `## Description\n${data.projectDescription}\n\n` +
  `## Table of Contents\n` +
  `[Installation](#installation)\n\n` +
  `[Usage](#usage)\n\n` +
  `[Tests](#tests)\n\n` +
  `[Contributing](#contributing)\n\n` +
  `[Questions](#questions)\n\n` +
  `[License](#license)\n\n` +
  `## Installation\n${data.installInstructions}\n\n` +
  `## Usage\n${data.usageInformation}\n\n` +
  `## Tests\n${data.testInstructions}\n\n` +
  `## Contributing\n${data.contributionGuidelines}\n\n` +
  `## License\nThis project is licensed under ${data.license}\n\n`
);

}

module.exports = generateMarkdown;
