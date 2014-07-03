# don-republic: Social eDemocracy

動民主

* [Prototype Repository](https://github.com/g0v/don-republic-mockup)
* [Prototype Demo](http://g0v.github.io/don-republic-mockup/)

* Notice: if your compass version is 0.12.6, make sure it is not [conflict](https://rubygems.org/gems/compass) to sass.

## Preparing

## Mac
* Install Brew
    * http://brew.sh/
* Install Nodejs
    * brew install nodejs
# Development

# Install dependency

    $ npm install
    $ bower install

    Everytime you changed the bower.json, please wire dependency to update index.html
    $ gulp wiredep

# Start development

    $ cp config.js.sample config.js # and update the configuration for yourself
    $ gulp watch

# Troubule Shooting

if you met problem 'Too many open files in system...' on Mac OS X, you could try

    $ ulimit -S -n 2048

# License

License: http://g0v.mit-license.org/

