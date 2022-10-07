
# How to setup Repo in your local system?

Steps to follow

## 1. Fork Repo

## 2. Clone Your personal Repo copy created using FORK

git clone https://github.com/[YOUR_GITHUB_USERNAME]/[REPO_NAME].git

## 3. Installing all npm packages

Navigate to the directory and run the following code. This will install all the dependencies you need.
The project has been created using yarn package manager


npm install 
OR
yarn install


*Note* : You can have different localhost other than 3000, use that in that case. 

*Never push credentials to GitHub*

## Pushing changes or making changes

For pushing your updates make a new branch in this format.

git checkout -b "branch name"

make changes and 
git add .
git commit -m "comments"
git push -u origin "branch name"

## Create a PR
Click on contribute and perfrom a Pull Request
And also describe a bit what changes made and try to attach screenshots.

Thank you for contributing :)
