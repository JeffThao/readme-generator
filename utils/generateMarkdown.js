// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  * [Installation](#installation)
  * [License](#license)
  * [Testing](#testing)
  * [Report a problem](#bug)
  * [Usage](#usage)
  * [How to contribute](#contributing)
  
  ## Installation
  ${data.install}

  ## License
  ${data.license}

  ## Testing
  ${data.test}

  ## Report a problem
  ${data.bug}

  ## How to use
  ${data.usage}

  ## How to contribute
  ${data.contributing}

`;
}

module.exports = generateMarkdown;
