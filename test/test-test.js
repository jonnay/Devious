TestTest = Object.create(Test);

//TestTest.testFail = function() { return false; }

TestTest.setupEntered = false;
TestTest.initEntered = false;
TestTest.teardownEntered = false;
TestTest.initialize = function() { this.initEntered = true; }
TestTest.setup = function() { this.setupEntered = true; }
TestTest.teardown = function() { this.teardownEntered = true; }
TestTest.testInit = function() { return this.initEntered; }
TestTest.testSetup = function() { return this.setupEntered; }
TestTest.testTeardown = function() { return this.teardownEntered; }

TestTest.calleeEntered = false;
TestTest.calleeTester = function() { this.calleeEntered = true; }
TestTest.caller = function() { TestTest.calleeTester(); }
TestTest.nonCaller = function() {}
TestTest.testFailAssertCalled = function () { return !this.assertCalled(this.nonCaller, this.calleeTester) }
TestTest.testAssertCalled = function () { return this.assertCalled(this.caller, this.callee); }

TestTest.thrower = function() { throw "test exception" }
TestTest.testNotAssertThrown = function () { return !this.assertThrown(this.callee, "test exception"); }
TestTest.testAssertThrownProper = function () { return !this.assertThrown(function() { this.notDefinedZzzDeadBeefZzz();}, "foo"); }
TestTest.testAssertThrown = function () { return this.assertThrown(this.thrower, "test exception")}


