partsLayoutController = RouteController.extend({
	layoutTemplate: 'partsLayout'
});

Router.route('/viewParts', {
	controller: 'partsLayoutController',
	template: 'viewParts'
});

Router.route('/buildParts', {
	controller: 'partsLayoutController',
	template: 'buildParts'
});