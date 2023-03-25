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
        let dollar = $('input').val();

        $('p').append(dollar + ' Amerikaanse dollar is omgerekend:');
        $('#euro').append(dollar*euro);
        $('#pond').append(dollar*pond);
        $('#yen').append(dollar*pond);
    });
  },
  error: function(){
    $('p').append('Fout: er is iets fout gegaan bij het opvragen van de omrekenvaluta.')
  }
});
