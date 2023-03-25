

$.ajax({
  url: 'https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q=Nijkerk',
  dataType: 'jsonp',
  contentType: 'application/jsonp',
  success: function(weather) {
    console.log(weather);
    $('h1').append(weather.name);
  },
  error: function(){
    $('#divResult').append('Fout: er is iets fout gegaan')
  }
});

//'https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q='
