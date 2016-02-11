var coords = {lat: 50.9700121, lng: -121.8969983};

  function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: coords,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // Fusiton Table Link
    var layer = new google.maps.FusionTablesLayer({
      query: {
        select: '\'Geocodable address\'',
        from: '1xiZ6H1jitxLl34mV1GHYfxpIX6B5_yoGTPwpTmAv'
        }
       });
    layer.setMap(map);
  } 

$(function (){

  $('#vancouver').on('click', function () {
    console.log("You pressed the button")
    coords = {lat: 49.2827, lng: -123.1207};
    initAutocomplete();
  });

  $('#granite').on('click', function () {
    console.log("You pressed the button")
    coords = {lat: 49.4430029,lng: -120.6829492};
    initAutocomplete();
  });

  $('#pavillion').on('click', function () {
    console.log("You pressed the button")
    coords = {lat: 50.9700121, lng: -121.8969983};
    initAutocomplete();
  });

  $('#weaver').on('click', function () {
    console.log("You pressed the button")
    coords = {lat: 52.82371, lng: -121.42398};
    initAutocomplete();
  });

  $('#salmo').on('click', function () {
    console.log("You pressed the button")
    coords = {lat: 49.1606, lng: -117.27235};
    initAutocomplete();
  });

  $('#hedley').on('click', function () {
    console.log("You pressed the button")
    coords = {lat: 49.36426, lon: -120.11695};
    initAutocomplete();
  });
});


