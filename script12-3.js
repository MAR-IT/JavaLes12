

$.ajax({
  url: 'https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q=Nijkerk&units=metric&lang=nl',
  dataType: 'jsonp',
  contentType: 'application/jsonp',
  success: function(weather) {
    console.log(weather);
    $('h1').append(weather.name);
    $('#temp').append(weather.main.temp_min + ' en ' + weather.temp_max + ' graden.');
    $('#gevoel').append(weather.main.feels_like  + ' graden');
    $('#vocht').append(weather.main.humidity + '%');
  },
  error: function(){
    $('#divResult').append('Fout: er is iets fout gegaan')
  }
});

//'https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q='
