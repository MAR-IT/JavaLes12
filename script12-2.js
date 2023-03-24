$(document).ready(function() {
  $.ajax({
    url: 'https://mar-it.github.io/JavaLes12/content12.html'
    success: function(data) {
      $('#divResult').html(data);
    };
    error: function(){
      $('#divResult').append('Fout: er is iets fout gegaan');
    };
  });
