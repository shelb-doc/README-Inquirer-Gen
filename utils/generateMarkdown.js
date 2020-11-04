
// function to generate markdown for README
function generateMarkdown(userResponse, userInfo) {

  var result = (`
  # ${userResponse.title} 
${userResponse.description}
## Table of Contents
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [License](#License)
\n* [Contributors](#Contributors)
\n* [Author](#Author)
\n* [Tests](#Tests)
## Installation
${userResponse.installation}
## Usage
${userResponse.usage}
## License 
This project is licensed under the ${userResponse.license} - see the file for details
## Contributing
${userResponse.contributing}
## Tests
${userResponse.tests}
## Author 
\n![ProfileImage](${userInfo.avatar_url})
\n**${userInfo.name}**
\nLocation:${userInfo.location}
\n[GitHub](${userInfo.html_url})`)


  return result ;
}

module.exports = generateMarkdown;
