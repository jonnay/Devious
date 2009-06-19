Test = {
	passed: 0,
	executed: 0,
	setup: function() {},
	teardown: function() {},
	initialize: function() {},
	finalize: function() {},

	assertCalled: function(caller, callee) {
		var origionalCallee = callee;
		var called = false;
		callee = function() {
			called = true;
			return origionalCallee.apply(this, arguments);
		}
		caller();
		return called;
	},

	assertThrown: function(func, exc) {
		try {
			func();
			return false;
		} catch(e) {
			if (e == exc)
				return true;
			else
				return false;
		}
	},

    test: function(test, reporter) {
		this.setup();

		var r;
		var extra;
		try {
			eval("r = "+test+"()");
		} catch (e) {
			extra = e;
			r = false;
		}
		reporter.test(test, (r === true), extra);

		if (r === true) this.passed = this.passed + 1;
		this.executed = this.executed + 1;

		this.teardown();
	},

    run: function(reporter) {
		reporter.start();
		this.initialize();
		for (member in this) {
			if ((member.length > 4) && (member.substr(0, 4) == "test")) {
				this.test("this."+member, reporter);
			}
		}
		this.finalize();
		reporter.totals(this.executed, this.passed)
	}
}