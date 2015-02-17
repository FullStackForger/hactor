# hactor

[![Build Status](https://api.travis-ci.org/innocentio/hactor.png)](https://travis-ci.org/innocentio/hactor)


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
