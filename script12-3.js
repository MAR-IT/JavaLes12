

$.ajax({
  url: 'https://api.openweathermap.org/data/2.5/weather?q=Nijkerk,nl&appid=8566d604cd9402b65394b034e52aa2af&units=metric',
  dataType: 'jsonp',
  contentType: 'application/jsonp',
  success: function(weather) {
    console.log(weather);
    $('h1').append(weather.name);
    $('#temp').append(((weather.main.temp_min - 32)/1.8) + ' en ' + weather.main.temp_max + ' graden.');
    $('#gevoel').append(weather.main.feels_like  + ' graden');
    $('#vocht').append(weather.main.humidity + '%');
  },
  error: function(){
    $('#divResult').append('Fout: er is iets fout gegaan')
  }
});

//'https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q='
