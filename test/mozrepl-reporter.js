MozReplReporter = {
	start: function() {
		repl.print ("\n");
		repl.print ("Running Tests");
	},
	test: function(name, result, extra) {
		repl.print( (result ? "PASS":"FAIL") + " " + name);
		if (extra) {
			repl.inspect(extra);
		}
	},

	totals: function(executed, passed) {
		repl.print("Tests Executed: "+executed);
		repl.print("Tests Passed  : "+passed);
		repl.print("Tests Failed  : "+(executed-passed));
		repl.print((this.passed == this.executed ? "WIN!" : "FAIL (_x___}< "));
	}
}
