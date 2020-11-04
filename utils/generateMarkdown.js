
// function to generate markdown for README
function generateMarkdown(userResponse, userInfo) {
  var licenseBadge = generateBadge(userResponse.license)
  var result = (`# ${userResponse.title}
![License](${licenseBadge} \n
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

function generateBadge(license) {
  let badge;
  
  switch (license) {
    case "GNU AGPLv3":
      badge = { name: "GNU+AGPLv3", color: "orange" };
      break;
    case "GNU GPLv3":
      badge = { name: "GNU+GPLv3", color: "red" };
      break;
    case "GNU LGPLv3":
      badge = { name: "GNU+LGPLv3", color: "blue" };
      break;
    case "Mozilla Public License 2.0":
      badge = { name: "Mozilla+2.0", color: "yellow" };
      break;
    case "Apache License 2.0":
      badge = { name: "Apache+2.0", color: "green" };
      break;
    case "MIT License":
      badge = { name: "MIT", color: "brightgreen" };
      break;
    case "Boost Software License 1.0":
      badge = { name: "Boost+Software+1.0", color: "yellowgreen" };
      break;
    case "The Unlicense":
      badge = { name: "The+Unlicense", color: "blueviolet" };
      break;
  }

  return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color})`;
}

module.exports = generateMarkdown;
