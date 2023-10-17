# Chris Staub Portfolio Website

This is a website to store my Bio, Resume, and general stuff

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

Useful commands for website development

**Use this command to invalidate the cloudfront cache**
```aws cloudfront create-invalidation --distribution-id E2BU3AFPICGS4A --paths "/*"```


**Use this command to sync the resume to the s3 bucket**
```aws s3 sync ./resume s3://chrisstaub.com/resume```

**This is the old link to the css**
```<link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" />```