var stigen = stigen || {};
stigen.activities = (function (ns, Backbone, _){
	"use strict";
	
	ns.ActivityTypeCollection = Backbone.Collection.extend({
		model: ns.ActivityType
	});

	return ns;
}(stigen.activities || {}, Backbone, _));
