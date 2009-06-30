Devious.AOP = Object.create(Devious.Package);
Devious.AOP.version = [ 0, 0, 1];

Devious.AOP.features = ["advice"];
Devious.AOP.depends = [];

Devious.AOP.doc = "An Aspect Oriented Programming Package.";

Devious.AOP.before = function(beforeF, F) {
	return function() {
		var args = beforeF.apply(null, this.arguments);
		F.apply(null, args);
	}
};

Devious.AOP.before.doc  = "Wrap the function around in before advice.\n";
Devious.AOP.before.doc += "The Before advice should be a function that returns an array of arguments passed to its wrapping target.\n"
Devious.AOP.before.doc += "Note that this wrapping doesn't strictly add advice to the function, it mearly returns a function that performs the before half of the equation.";

Devious.AOP.after = function(afterF, F) {
	return function() {
		return afterF.call(null, F.apply(null, this.arguments));
	}
}
Devious.AOP.after.doc  = "Wrap the function around in after Advice.\n";
Devious.AOP.after.doc += "The after advice receives one parameter (the result from the original function) and should return the new return value.";

Devious.AOP.around = function(beforeF, afterF, F)
{
	return Devious.AOP.Before(beforeF, Devious.AOP.after(afterF, F));
}
Devious.AOP.around.doc = "Wrap the function in both before and after advice."

//Doing packages this way might not work, it depends if execution and interpretation of a function is properly delayed.
// if it does work, this will make a great scoping method.
Devious.Package.ifFeature("test", function() {
	var called = false;
	var callCheck = function() {
		called = true;
		return callCheck.arguments;
	};

	Devious.AOP.Test = Object.create(test);
	Devious.AOP.setup = function() { called = false; }
	Devious.AOP.testCallCheck = function() {
		callCheck();
		return called;
	}
	Devious.AOP.testCallCheckReInited = function() {
		return !called;
	}
	Devious.AOP.testBefore = function() {
		Devious.AOP.Before(callCheck, Devious.id)();
		return called;
	}
	Devious.AOP.testAfter = function() {
		Devious.AOP.After(callCheck, Devious.id)();
		return called;
	}
});

