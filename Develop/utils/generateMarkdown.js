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

const generateMarkdown = (data, contributors) => {
  return `
# ${data.title}

[![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)](http://ForTheBadge.com)

>## Table Of Contents
>
>  [Description](#description)
>
>  [Installation](#installation)
>
>  [Usage](#usage)
>
>  [Licensing](#licensing)
>
>  [Contributors](#contributors)
>
>  [Tests](#tests)
>
>  [Questions](#questions)

### Description
  ${data.description}

### Installation
  ${data.installation}
  
### Usage
  ${data.usage}

### Licensing
  ${data.license}

### Contributors
  ${contributors}
### Tests
  ${data.tests}

### Questions
  Have any questions? Please reach out to:
  ${data.questions}
`;
};

module.exports = {
  generateMarkdown,
};
