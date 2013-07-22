var stigen = stigen || {};
stigen.activities = (function (ns, Backbone, _){
	"use strict";
	
	ns.ActivityType = Backbone.Model.extend({
		defaults: {
			id: 0,
			name: "New Activity type"
		}
	});

	return ns;
}(stigen.activities || {}, Backbone, _));
