# ExpressBlogger

## Class Notes

- .gitignore is the list of files that will be ignored by git
- We want node_modules to be ignored because of the large folder size
- When we collaborate with other developers, we clone the repository WITHOUT the node_modules installed, and then we run 'npm i' to install the node_modules

- Generators like express-generator will create the boilerplate framework code for us, and then we run 'npm i' to download the list of dependencies.

- The package.json comes with a "scripts" config, in there you can define small blocks of code that can be easily invoked from the command line with 'npm run <scriptName>'
	- _Note_: For the "start" script, you only need to run "npm start"