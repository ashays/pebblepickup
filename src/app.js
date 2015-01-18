var UI = require('ui');
var ajax = require('ajax');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

Accel.init();

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Click Select',
  subtitle: 'For Mad Game'
});
card.show();


Accel.on('tap', function(e) {
  Vibe.vibrate('short');
  var loading = new UI.Card({
    title:'Chill I am loading'
  });
  loading.show();
  console.log("test");
  // Get information
  ajax({ url: 'https://www.kimonolabs.com/api/a38ll6me?apikey=drXUUfvK516nGaCNZwneGEIt6UZWtiWe', type: 'json'},
    function(data) {
      console.log(JSON.stringify(data));
      var randLine = Math.floor(Math.random() * data.count);
      var pickupline = data.results.collection1[randLine].pickupLine;
      console.log(data.results.collection1.pickupLine);
      var user = data.results.collection1[randLine].user;
      console.log(data.results.collection1.user);
      var line = new UI.Card({
        title: pickupline,
        body: user,
        scrollable: true
      });
      line.show();
    }, function(error) {
      console.log('hrllo');
    });
});