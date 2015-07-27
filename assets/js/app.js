(function() {
  var profileTemplate = $('#profile-temp').html();
  var repoTemplate = $('#repo-temp').html();

  var p = Handlebars.compile(profileTemplate);
  var r = Handlebars.compile(repoTemplate);

  $.ajax({
  	url: 'https://api.github.com/users/jacklynlee31',
  	dataType: 'json',
		success: function(data) {
			var ht = p(data);
			$('.profile').html(ht);
		}
	});

  $.ajax({
  	url: 'https://api.github.com/users/jacklynlee31/repos',
  	dataType: 'json',
		success: function(data) {
			var ht = r(data);
			$('.repo').html(ht);
		}
	});


})();
