/*
The README will be populated with the following:

* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email


Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
*/

const generateMarkdown = (data) => {
  return `
# ${data.title}

### Description
  ${data.description}

### Table Of Contents
  ${data.tableOfContents}

### Installation
  ${data.installation}
  
### Usage
  ${data.usage}

### Licensing
  ${data.license}

### Contributors
  ${data.contributors}

### Tests
  ${data.tests}

### Questions
  ${data.questions}
`;
};

module.exports = {
  generateMarkdown,
};
