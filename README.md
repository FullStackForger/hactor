# hactor

[![Build Status](https://travis-ci.org/indieforger/hactor.svg?branch=master)


## Usage

```
Hactor = require('hactor');

Class = Hactor.extend({
	constructor: function () {
		// whatever you want in constructor		
	},
	foo: function () {
		return 'bar';
	}
}, {
	xyz: funciton () {
		return 123;
	}
});


var object = new Class();
console.log(Class.foo()); // -> 'bar'
console.log(object.xyz()); // -> 123
```
