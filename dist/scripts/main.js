$(document).ready(function() {
	var user = new UserModel();
	user.fetch();
	var App = Backbone.Router.extend({
		routes: {
			'': 'profile',
			'edit': 'edit'
		},
		profile: function() {
			$('.page').hide();
			$('#profile').show();
		},
		edit: function() {
			$('.page').hide();
			$('#edit').show();
			$('#name').val(user.get('name'));
			$('#inputEmail3').val(user.get('email'));
			$('#role').val(user.get('role'));
		}
	});

	var app = new App();
	Backbone.history.start();

	$('#edit').on('submit', function(e) {
		e.preventDefault();
		user.set({
			name: $('#name').val(),
			email: $('#inputEmail3').val(),
			role: $('#role').val()
		});
		user.save();
	});

	user.on('change', updateProf);

	function updateProf(updateProfModel) {
		$('.name').html(updateProfModel.get('name'));
		$('.profile-usertitle-name').html(updateProfModel.get('name'));
		$('.profile-usertitle-job').html(updateProfModel.get('role'));
	}
});