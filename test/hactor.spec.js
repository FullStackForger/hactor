var Code = require('code'),
	Lab = require('lab'),
	expect = Code.expect,	
	lab = exports.lab = Lab.script(),
	it = lab.it,
	describe = lab.describe,
	Actor = require('../');


describe("Actor", function () {

	it('should have static method extend', function (done) {
		expect(Actor.extend).to.be.a.function();
		done();
	});

	it('should be a constructor function', function (done) {
		expect(Actor).to.be.a.function();
		expect(new Actor()).to.be.an.object();
		done();
	});
});

describe("Actor.extend()", function () {

	it('should extend with empty or null arguments', function(done) {
		expect(Actor.extend()).to.be.a.function();
		expect(Actor.extend({})).to.be.a.function();
		expect(Actor.extend({}, null)).to.be.a.function();
		expect(Actor.extend(null, {})).to.be.a.function();
		expect(Actor.extend(null, null)).to.be.a.function();
		
		done();
	});
	
	it('should only accept argument: properties as an object', function(done) {
		var testMethods = [];
		
		testMethods.push(function () { Actor.extend("random_string");});
		testMethods.push(function () { Actor.extend(123);});
		testMethods.push(function () { Actor.extend([]);});

		testMethods.forEach(function(func) {
			expect(func).to.throw(Error,  'argument: properties must be an object');
		});
		
		done()
	});

	it('should only accept argument: staticProperties as an object', function(done) {
		var testMethods = [];

		testMethods.push(function () { Actor.extend(null, "random_string");});
		testMethods.push(function () { Actor.extend(null, 123);});
		testMethods.push(function () { Actor.extend(null, []);});

		testMethods.forEach(function(func) {
			expect(func).to.throw(Error,  'argument: staticProperties must be an object');
		});

		done()
	});

});


describe("New custom Actor class object", function () {

	it('should inherit extend method', function (done) {
		expect(Actor.extend().extend).to.be.a.function();
		done();
	});
	
	it('should extend Actor with prototype methods', function (done) {
		var NewActor = Actor.extend({
			testMe1: function () { return 1; },
			testMe2: function () { return 2; }
		});
		expect(NewActor.prototype.testMe1()).to.equal(1);
		expect(NewActor.prototype.testMe2()).to.equal(2);
		done();
	});

	it('should extend Actor with static methods', function (done) {
		var NewActor = Actor.extend(null, {
			testMe1: function () { return 1; },
			testMe2: function () { return 2; }
		});
		expect(NewActor.testMe1()).to.equal(1);
		expect(NewActor.testMe2()).to.equal(2);
		done();
	});
});

describe("Custom Actor object", function () {
	
	it('should call constructor while instantiating', function (done) {		
		var constructorCalled = false,
			MyActor = Actor.extend({
			constructor: function (version) {
				constructorCalled = true;				
			}
		});
		(new MyActor(1.2));

		expect(constructorCalled).to.be.equal(true);
		done();
	});


	it('should provide constructor with access to locals', function (done) {
		var MyActor, actor;
		
		MyActor = Actor.extend({
			constructor: function (version) {
				this.version = version;
			},
			getVersion: function () {
				return this.version;					
			}
		});
	
		actor = new MyActor(1.2);

		expect(actor.version).to.be.equal(1.2);
		expect(actor.getVersion()).to.be.equal(1.2);
		done();
	});

	it('should inherit prototype and constructor', function (done) {
		var MyActor, actor;

		MyActor = Actor.extend({
			constructor: function (version) {
				this.version = version;
			},
			getVersion: function () {
				return this.version;
			}
		});
		actor = new MyActor();

	done();
		//actor = new MyActor(1.2);
	})
});
