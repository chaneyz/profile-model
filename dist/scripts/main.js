$(document).ready(function() {
	var user = new UserModel();
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
		}
	});

	var app = new App();
	Backbone.history.start();

	$('#edit').on('submit', function(e) {
		e.preventDefault();
		user.set({
			name: $('#name').val(),
			role: $('#role').val()
		});
	});

	user.on('change', updateProf);

	function updateProf(updateProfModel) {
		$('.profile-usertitle-name').html(updateProfModel.set('name'));
		$('.profile-usertitle-job').html(updateProfModel.set('role'));
	}

});