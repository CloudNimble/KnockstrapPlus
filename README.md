KnockstrapPlus [![Build Status](https://travis-ci.org/faulknercs/Knockstrap.svg?branch=master)](https://travis-ci.org/faulknercs/Knockstrap)
==========

### Description

KnockstrapPlus is a Bootstrap 4.x binding library for Knockout.js

#### Supported widgets:

- Modal
- Tooltip
- Popover
- Alert
- Progress
- Toggle button
- Radio button
- Checkbox button
- Carousel
- Pagination
- Pager

[Download](https://github.com/cloudnimble/KnockstrapPlus/releases/download/v4.0.0/knockstrap-4.0.0.zip)

[Documentation/Examples](http://cloudnimble.github.io/KnockstrapPlus/)

### Dependencies

- jQuery (Any version compatible with Bootstrap 4)
- Twitter Bootstrap 4 (CSS and JavaScript)
- Knockout.js (>=3.0.0)

### Packages

[NuGet](http://www.nuget.org/packages/KnockstrapPlus/) | [Bower](http://bower.io/search/?q=knockstrapplus) | [npm](https://www.npmjs.org/package/knockstrapplus)

### Building
#### Building using grunt:

Install node.js and grunt plugin. 

Install all grunt plugins:

	npm install

Then you can build project with:

	grunt

Also, you can specify custom build and temp directories:

	grunt -buildPath=D:/custom/build -tempPath=D:/custom/temp

To build examples use:

	grunt examples

Also, you can specify custom examples directory:

	grunt -examplesPath=D:/custom/examples

To run unit-tests, use:

	grunt jasmine

To run building, tests and minification, use:

	grunt release 

### License: [MIT License](http://www.opensource.org/licenses/mit-license.php)