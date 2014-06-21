don-republic: Social eDemocracy
============
動民主

* Notice: if your compass version is 0.12.6, make sure it is not [conflict](https://rubygems.org/gems/compass) to sass.
Mac
------------
* Install Brew
    * http://brew.sh/
* Install Nodejs
    * brew install nodejs
* Install jade
    * npm install -g jade
* clone the repository
   * git clone https://github.com/g0v/don-republic.git
* Install the dependences
   * make depends
* make and run it
	* cd don-republic
	* sudo npm i -g static-here
	* make all
	* cd public/
	* static-here
* Open your browser
    * connect to http://localhost:8888/public/

Windows
------------
* now using Fire.app build views/ to public/
* if build doesn't work: jade -w views -o public
* compile json.ls fake data: lsc -cj test.json

Mockup / Prototype
============
* 0.5 MVP version http://g0v.github.io/don-republic/framework/simple.html
* 2.0 struggling version http://g0v.github.io/don-republic/public/index.html

# Development

## Install dependency

    $ npm install
    $ bower install

    Everytime you changed the bower.json, please wire dependency to update index.html
    $ gulp wiredep

## Start development

    $ gulp watch

# Troubule Shooting

if you met problem 'Too many open files in system...' on Mac OS X, you could try

    $ ulimit -S -n 2048

License
============
License: http://g0v.mit-license.org/ , although it is empty so far.

