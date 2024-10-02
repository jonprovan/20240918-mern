# THE ANGULAR CLI = COMMAND LINE INTERFACE

## Several Useful Commands
- all of these start with ng (a-NG-ular), then the command and possible flags
- ng --help gives you a list of root commands
- ng <command name> --help to get help on a specific command
- ng new <project name> will create new project
    - this creates a folder with the same name and puts everything in it
    - this ALSO creates a GitHub repo if you're not already inside one
    - if you move a project created outside into an existing repo, you'll have to delete the new repo, etc.
- ng serve will start your server and run the project
    - default port for Angular is 4200
    - add --open to auto-open a browser to this new server's homepage
    - if you're not seeing changes happening when you save files, add --live-reload
    - if you have "compilation" errors, Angular will throw those errors in the console and the browser
    - you can also add flags here for which environment to run (dev/prod, etc.)
- ng generate (or ng g) <type> <name> will create a new Angular element of this type/name
    - ng g component product will create all the files for a new component called product
    - ng g service http will create all the files for a new service called http, etc.
- ng test will run your test suite, i.e., all the unit tests you've written