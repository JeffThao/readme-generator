// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## What does it do?
  ${data.description}

  ### Installation
  ${data.install}

  ### Testing
  ${data.test}

  ### Report a problem
  ${data.bug}

  ### How to use
  ${data.usage}

  ### How to contribute
  ${data.contributing}

`;
}

module.exports = generateMarkdown;
