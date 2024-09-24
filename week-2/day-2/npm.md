# NPM = NODE PACKAGE MANAGER
- your JS project will have a number of software dependencies
- a dependency is another piece of software you'd like to use in your project
- this can be a pre-existing piece of software that someone else created
- or, you can write software that your own future projects can use
- you'll initiate an NPM project, then add dependencies to it
- examples -- express, mongoose, nodemon, database access, libraries for JSON manipulation, etc.

# SOME COMMANDS
- npm -help -- gives you some information about the various commands that can be run
- npm <command> -help -- give you information about that particular command, flags/parameters you can add, etc.
- npm init -- start an npm project and create the package.json file (a list of all the dependencies for your project)
- npm install (npm i) -- by itself, it updates all your dependencies to the version specified in your package.json file
- npm install <package name> -- this will install a package/dependency for the project directory you're in
- npm install -g <package name> -- this will install a package/dependency globally, i.e., for all projects
- npm uninstall <package name> -- this will uninstall a package/dependency for your project
- npm test -- runs the test suite for your project

# ONCE INSTALLED...
- you can "require" a package from within your code to have access to its functionality