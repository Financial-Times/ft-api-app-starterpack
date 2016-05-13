# An FT API starter pack for NodeJS / FE Aurelia application.

## Overview

This project contains a basic implementation of both back-end and front-end application with a complete dev, test and build solution ready out-of-the-box. The main purpose of this implementation is to have a generic and re-usable initial solution that allows to quickly start creating more specific and tailored applications / prototypes. Due to the way the solution has been designed, it is not needed anymore to repeatedly spend time on usual preparations that are required when it comes to starting a new project / prototype from scratch.

Just after downloading the pack (providing that the environment has all the required tools pre-installed) a developer straight away is able to focus on the application's features, as the starter pack provides them with:

* a simple back-end application that serves the front end app both in *development* and in *release* (built, with static assets concatenated and minified) versions
* an example front-end SPA
* a complete development environment, including *watcher* functionality, javascript static syntax checks, *ES2015* and *CSS* compilers, unit tests engine and the complete build process that allows to prepare the application that is ready to be deployed to UAT / Prod environment

## Quickstart

The starter pack build tools do not support Windows as a development environment. The instructions on this page assume you are using a UNIX-like OS. If you're a Windows user, consider running a Linux VM.

###Prerequisites

To get and build the application, it is required to have **Git** and **NodeJS** preinstalled on the target machine / environment.

* [Git](https://www.git-scm.com/) is required to fetch the startpack from the FT repository
* [NodeJS](http://nodejs.org/) is the JavaScript runtime, which is required for the back-end application as well as to run the build process and tasks runner
* [Gulp](http://gulpjs.com/) is a task runner, which is being used to run the build process
* [jspm](http://jspm.io/) is a package manager for the SystemJS universal module loader, built on top of the dynamic ES6 module loader - it is required due to the specifics of the FE app design and usage of Aurelia framework

#### Step 1

Start with installing **Git** and **NodeJS** versions that are corresponding to your OS. To make sure the tools are ready and accessible, run the following commands respectively:

    node -v

and

    git --version

which will allow you to find out which version of these you've got installed.

#### Step 2

Providing that you've got the **NodeJS** on your machine, you can install **Gulp** and **jspm** globally by simply typing:

    npm install gulp -g

and

    npm install jspm -g

Please note that you'll need administrative access to your machine to complete this step, as it installs both tools globally, so they can be used from any place in the OS folder's structure.

#### Step 3

Once you've got all the above preinstalled, you're ready to fetch the starter pack project from the repository:

    git clone https://github.com/Financial-Times/ft-api-app-starterpack.git YOUR_PROJECT_FOLDER

#### Step 4

With the starter pack downloaded, navigate to the root folder of the project and type:

    npm install

This will install all the required dependencies for you.

#### Step 5

You're ready to run the application! Simply type:

    npm run release

in the terminal at the root folder and it will build the app for you in a minified, concatenated, UAT / Prod version. Once the build process is finished, go to your browser and navigate to

    localhost:8080

to see the starter pack app working.

## Starter pack implementation details

The following description is related to the implementation details that will be useful for developers that are about to use the starter pack as a base to build their specific, tailored solutions.

Please note it has been written with an assumption that the developer has a basic knowledge about how to use the tools listed above, such as **npm** package manager, **Gulp** task runner as well as **ES2015** features like modules / dependencies powered by [SystemJS](https://github.com/systemjs/systemjs). To expand the FE SPA appropriately a basic knowledge of the **Aurelia** framework is also necessary, however due to the nature of this framework, an intermediate **ES2015** knowledge should be good enough to start.

For further details please refer to the appropriate documentation of each tool / library / framework.

##### Additional details about the back-end app

The BE App is powered by [NodeJS](http://nodejs.org) and [ExpressJS](http://expressjs.com/) framework. In the starter pack it contains only basic / generic modules that allow to serve the FE files from a different locations (either dev or release version), which are:
* configuration module
* boot module
* logger module

It is then entirely up to the developer to give a required shape to the back end app, write additional modules etc.

In the *development* version, the BE App serves static assets for the FE SPA from the *app/dev/client/assets/js/dst* folder.
In the *release* version, the BE App serves the FE SPA from the *app/dev/client/release* folder.

_To find out more about these two, please refer to the build process details section below._

The source code for the BE App is located at *app/dev/server* path in the initial project folders structure.

#### Additional details about the front-end app

The FE SPA is powered by [Aurelia](http://aurelia.io) framework and [FT Origami components](http://origami.ft.com/). It is highly recommended to get familiar with both solutions before attempting to work with the FE app in the starter pack.

By design, the FE SPA is completely decoupled from the BE App - so after deployment, the *release* version can be served by any server from any location.

Providing that you're familiar with the **Aurelia** framework, after downloading the project and familiarising yourself with the folders and files structure, probably you'd like to start with either removing or modifying the example modules included.
Either way you'll be able to immediately start adding additional modules, components, views etc. You'll be also able to compile it and display in the browser straight away.

_To find out more about two versions of the starter pack's FE SPA that you can run, please refer to the build process details section below._

The FE SPA uses a bundled version of some predefined [Origami](http://origami.ft.com/) components. If you'd like to add or remove an **Origami** component, simply generate a bundled version following the [Origami's team tutorial](http://origami.ft.com/docs/developer-guide/modules/building-modules/) and replace content of *origami.scss* and *origami.min.js* files accordingly.

The FA SPA uses *SASS* as a CSS compiler. Despite of its pros and cons, it has been chosen for compatibility reasons as currently other teams within FT are using it.

The source code for the FE SPA is located at *app/dev/client* path in the initial project folders structure.

#### Additional details about the build process

The whole build process is being powered by [Gulp](http://gulpjs.com/) task runner. Despite of its pros and cons, it has been chosen for compatibility reasons as currently other teams within FT are using it.

There are two version of the FE SPA that can be build with tasks defined in the starter pack: a *development* and a *release* version.

##### The *development* version of the FE SPA

The *development* version is one with all source files ready to be viewed and amended, not minified and divided into smallest possible chunks to promote better maintainability.

The FE SPA in this version has a following structure:

* index.html and config.js in root folder
* all static assets like images, fonts and sass files in *app/dev/client/assets* folder, within appropriate subfolders
* SystemJS files in *jspm_packages* folder
* other custom JavaScript modules and source files in *app/dev/client/assets/js/src* folder (including *Aurelia* framework and other third-party libraries)

Due to the fact that a modern syntax of **ES2015** is being used in the app and it's not yet widely supported by browsers, an usage of a transpiler is required.
The starter pack contains a *watch* task, which, while being run, transpiles ES6 files into previous generation of JavaScript modules with [Babel](https://babeljs.io/) compiler and locates them under *app/dev/client/assets/js/dst* path, where **SystemJS** loads them from accordingly.

The *watcher* observes *SASS* files and *HTML* files in the *app/dev/client/assets/js/src* folder, then parses and copies the over to the *dst* folder if it detects they have been changed.

Apart from observing *ES2015* files in the *src* folder as mentioned above, it also observes all the JavaScript files in the project (apart from provided by third-party vendors, like e.g. *Aurelia* framework files) and it tests them against **ESLint** rules (please refer to the * Coding standards and ESlint tests* section below).

##### The *release* version of the FE SPA

In order to prepare the final, UAT / Prod ready version of the front-end SPA, it has to be compiled and exported to a separate folder, where it needs to contain all the static files ready to be served.

In the starter pack, the *app/release/client* folder becomes a new root folder for the *release* version of the FE SPA.

This can be achieved by typing in the terminal:

    npm run release

This will do the following during the build process:

* copy over the index.html and config.js files into *app/release/client* folder
* copy over all the static assets like images, fonts etc. into *assets* folder and appropriate subfolders
* copy over all HTML templates with associated view models into *assets/js* folder for lazy loading purposes
* copy over some required libraries from the *jspm_packages* folder (like SystemJS) to *app/release/client/jspm_packages*
* generate a minified version of CSS, concatenated into one file
* generate a minified version of the *Aurelia* framework and copy it over as one *aurelia.min.js* file to *assets/js* folder
* generate a minified version of the application logic and copy it over as one *app.min.js* file to *assets/js* folder

_For further details about the multi-tasks that are currently defined for *Gulp* task runner, please refer to the *build/tasks* folder in the starter pack._

By the nature of the FE SPA, it is enough to deploy all files from the *app/client/release* folder to any environment and serve them from there as they are, without any further changes.

#### Unit tests

The unit tests are powered by a [Karma](https://karma-runner.github.io/) environment. Unit tests are being run as a part of the build process provided and it won't be possible to build a package if any of the tests failed. A test report is being automatically generated after each run of the tests suite (inside the *test* folder).

In the starter pack, under the *test* folder, you'll find an example test spec.

#### Coding standards and ESlint tests

Before starting to amend / write some code, it is important to be aware about ESlint rules defined in the *.eslintrc* file at the root folder level, as checking the static syntax tests are part of the build process provided bu starter pack and if they fail, it won't be possible to build a package. These rules are set in accordance to current JavaScript standards and best practices, but it is obviously entirely up to the developer (or team) to amend these rules in a way they prefer.

Please be aware that currently **ALL** JavaScript files in the project are written in accordance to these rules and they all pass the tests - not only the FE SPA source code files, but also the BE App files, unit test specs, gulp tasks etc. The exemption from this rule are libraries provided by third-party vendors.

All the JavaScript code is also written in accordance to the following best practices and principles: clean code principle, KISS principle, DRY principle, single method responsibility principle and usage of object literal over constructor if the object created is a singleton.

It is recommended to keep it this way to maintain high code quality in the solution.