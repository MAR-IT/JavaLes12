//const datum = formatDate('yyyy/mm/dd', new Date());
/*
$.get('https://openexchangerates.org/api/latest.json?app_id=d8dd41c7c8b7451bab25c483abd0c16e'function(data) {
    console.log(data);
});
*/
$.ajax({
  url: 'https://openexchangerates.org/api/latest.json?app_id=d8dd41c7c8b7451bab25c483abd0c16e',
  dataType: 'jsonp',
  contentType: 'application/jsonp',
  success: function(data) {
    console.log(data);
    const euro = data.rates.EUR;
    const pond = data.rates.GBP;
    const yen = data.rates.JPY;
    $('button').on('click', function rekenen() {
        let dollar = Math.round(($('input').val())*100)/100;

        if (isNaN(dollar)) {
          alert('U heeft geen geldige waarde ingevoerd')
        }
        else {
          $('p').html(dollar + ' Amerikaanse dollar is omgerekend:');
          $('#euro').html(dollar*euro);
          $('#pond').html(dollar*pond);
          $('#yen').html(dollar*yen);
        };
    });
  },
  error: function(){
    $('p').append('Fout: er is iets fout gegaan bij het opvragen van de omrekenvaluta.')
  }
});
