var UI = require('ui');
var ajax = require('ajax');


// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Click for a pickup line'
});
card.show();


card.on('click', 'select', function() {
  var loading = new UI.Card({
    title:'Chill I am loading'
  });
  loading.show();
  console.log("test");
  // Get information  
  ajax({ url: 'https://www.kimonolabs.com/api/35u0ax40?apikey=drXUUfvK516nGaCNZwneGEIt6UZWtiWe', type: 'json'},
    function(data) {
      console.log(JSON.stringify(data));
      var pickupline = data.results.collection1[0].pickupLine;
      console.log(data.results.collection1.pickupLine);
      var user = data.results.collection1[0].user;
      console.log(data.results.collection1.user);
      var line = new UI.Card({
        title: pickupline,
        subtitle: user
      });
      line.show();
    }, function(error) {
      console.log('hrllo');
    });
});