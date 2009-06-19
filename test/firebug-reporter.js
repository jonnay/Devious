FirebugReporter = {
	start: function() {
		console.info("Testing Started");
	},
	test: function (name, result, extra) {
		console[(result ? "info" : "warn")](name);
	},
	totals: function(executed, passed) {
		console.dir({Executed: executed, Passed: passed, Failed: (executed - passed)});
		if (result) {
			console.info ("WIN!");
		} else {
			console.error ("FAIL (_x___}<");
		}
	}
}
