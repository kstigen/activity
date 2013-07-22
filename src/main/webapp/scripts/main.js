var stigen = stigen || {};
stigen.activities = (function (ns){
	"use strict";

	var activityTypes = new ns.ActivityTypeCollection([
		new ns.ActivityType({id: 1, name: "Trening"}),
		new ns.ActivityType({id: 2, name: "Øving"})
	]);

	console.log("Heisann");


	ns.init = function () {
		console.log("Console er her nuh!");
	};

	return ns;
}(stigen.activities || {}));

$(function () {
	"use strict";
	stigen.activities.init();
});