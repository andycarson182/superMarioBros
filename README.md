# Aviasales front-end-test-suite

This is the test project for the front end of Aviasales.

## Installation & running the project

_Prerequisite: You'll need to install NPM and node.js on your machine to install and run this project. For help on this please go to https://www.npmjs.com/get-npm_

1. Clone this project to your local machine.
2. Open a terminal and navigate to the root of the project. Once there, run the command `npm install` and wait for all of the dependencies to download and install.
3. Sill on the root of the project, run the command `npx cypress open` or `node_modules/.bin/cypress open`. This will open cypress on GUI mode. If it is the first time that you open cypress, there are some setup actions that will take place, so the first time will always take longer.
4. Once you have the cypress GUI window open, you can start a regression by clicking on the button that is on the top right of the window.
5. If the regression tests won't connect to the website you'll need to add the `HTTP_PROXY` to your terminal settings.
![Screen Shot 2023-10-08 at 2 41 18 PM](https://github.com/andycarson182/superMarioBros/assets/25748942/14632f07-8d5c-4d44-8e85-a23ed8458a17)


Alternatively, you can run all of the test cases form the command line in headless mode. For that run this command on a terminal on the root of the project: `npx cypress run --browser chrome --headless` or `node_modules/.bin/cypress --browser chrome --headless`
![download](https://github.com/andycarson182/superMarioBros/assets/25748942/04f52874-7a48-426e-b1d5-6434415d1920)
