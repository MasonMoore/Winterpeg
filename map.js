

function addMap() {
    var mapOptions = {
        center: new google.maps.LatLng(49.91763, -97.132981),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

    var weatherLayer = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.CELSIUS
    });
    weatherLayer.setMap(map);

    var cloudLayer = new google.maps.weather.CloudLayer();
    cloudLayer.setMap(map);

}

function refreshMap() {
    var map = document.getElementById("map-canvas");

    while (map.hasChildNodes()) {
        map.removeChild(map.lastChild);
    }
    addMap();
}
