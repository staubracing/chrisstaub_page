# Chris Staub Portfolio Website

This is a website to store my Bio, Resume, and general stuff

### Installation

#### Useful commands for website development

##### Use this command to invalidate the cloudfront cache**

```aws cloudfront create-invalidation --distribution-id E2BU3AFPICGS4A --paths "/*"```

##### Use this command to sync the website to the s3 bucket**

```aws s3 sync chrisstaub_site/ s3://chrisstaub.com/ --exclude ".git/*" --exclude "README.md" --exclude ".github/*```



