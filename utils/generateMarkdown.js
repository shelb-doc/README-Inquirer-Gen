
// function to generate markdown for README
function generateMarkdown(userResponse, userInfo) {
  var licenseBadge = generateBadge(userResponse.license)
  var licenseUrl = generateLicenseUrl(userResponse.license)
  var result = (`# ${userResponse.title}
\n![License](${licenseBadge} \n
${userResponse.description}
\n## Table of Contents
\n* [Installation](#Installation)
\n* [Instructions](#Instructions)
\n* [Contributors](#Contributors)
\n* [Tests](#Tests)
\n* [License](#License)
\n* [Author](#Author)
\n## Installation
\n${userResponse.installation}
\n## Usage
\n${userResponse.usage}
\n## Contributing
\n${userResponse.contributing}
\n## Tests
\n${userResponse.tests}
\n## License
\nThis project is licensed under the ${userResponse.license} - see the [License](${licenseUrl}) page.
\n## Author
\n![ProfileImage](${userInfo.avatar_url})
\n${userInfo.name}
\nLocation: ${userInfo.location}
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

function generateLicenseUrl(license) {
  let path;
  
  switch (license) {
    case "GNU AGPLv3":
      path = "agpl-3.0";
      break;
    case "GNU GPLv3":
      path = "gpl-3.0";
      break;
    case "GNU LGPLv3":
      path = "lgpl-3.0";
      break;
    case "Mozilla Public License 2.0":
      path = "mpl-2.0";
      break;
    case "Apache License 2.0":
      path = "apache-2.0";
      break;
    case "MIT License":
      path = "mit";
      break;
    case "Boost Software License 1.0":
      path = "bsl-1.0";
      break;
    case "The Unlicense":
      path = "unlicense";
      break;
  }

  return `https://choosealicense.com/licenses/${path}/`;
}

module.exports = generateMarkdown;
