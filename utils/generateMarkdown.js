// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  * [Installation](#installation)
  * [License](#license)
  * [Testing](#testing)
  * [Report a problem](#email)
  * [Usage](#usage)
  * [How to contribute](#contributing)
  
  ## Installation
  ${data.install}

  ## License
  ![Image of license](https://img.shields.io/badge/${data.license}-v1.0-brightgreen)
  

  ## Testing
  In order to test, please run 
  ${data.test}

  ## Report a problem
  To report any issues, you can email me at ${data.email}, or create an issue on [this repo](${data.repo}/issues).

  ## How to use
  ${data.usage}

  ## How to contribute
  ${data.contributing}

  ## GitHub
  You can check out more of my work at [${data.github}]([https://www.github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
