

$.ajax({
  url: 'https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q=Nijkerk',
  success: function(weather) {
    console.log(weather);
  },
  error: function(){
    $('#divResult').append('Fout: er is iets fout gegaan')
  }
});

//'https://api.openweathermap.org/data/2.5/weather?appid=8566d604cd9402b65394b034e52aa2af&q='
