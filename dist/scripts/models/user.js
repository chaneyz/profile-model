var UserModel = Backbone.Model.extend({
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/austin-zach-profile/',
	idAttribute: '_id',
	defaults: {
		_id: null,
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	}
});