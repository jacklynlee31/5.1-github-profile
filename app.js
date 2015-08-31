(function() {
  var profileTemplate = $('#profile-temp').html();
  var repoTemplate = $('#repo-temp').html();

  var p = Handlebars.compile(profileTemplate);
  var r = Handlebars.compile(repoTemplate);

  var apiUrl = 'https://api.github.com/users/jacklynlee31';

  $.ajax({
  url: apiUrl,
  success: function(data) {
    var ht = p(data);

    $('.profile').html(ht);
  }
	});

  $.ajax ({
    url: 'https://api.github.com/users/jacklynlee31/repos',
    success: function(data) {
      var results = r(data);
      $('.repo').html(results);
    }
  });
})();
