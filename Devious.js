/**
 * Shamelessly snarfed from the king of Javascript, Douglas Crockford.
 * See: http://javascript.crockford.com/prototypal.html
 */

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		function F() {}
		F.prototype = o;
		return new F();
	};
}

Devious = {};

Devious.id = function(x) { return x; };
	
Devious.Package = {
	name: "Package master Object",
	version: [ 0, 0, 0 ],
	features: [],
	depends: [],

	ifFeature: function(feature, F) {
		// do stuff
	},
	
	//newp
	addFeature: function(feature) {
		Devious.Package.featues.push(feature);
	},

	//newp
	checkFeature: function(feature) {
		return Devious.Package.features.hasKey(feature);
	},
};




