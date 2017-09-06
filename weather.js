function getWeather() {
    currentConditions = [];
    div = document.getElementById("weather")
    clock = new Date();
    var url = "http://api.wunderground.com/api/d6bba55e875219d5/geolookup/conditions/q/CA/Winnipeg.json?&callback=addWeather";

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src == url) {
            document.getElementsByTagName('head')[0].removeChild(scripts[i]);

            while (div.hasChildNodes()) {
                div.removeChild(div.lastChild);
            }


        }


    }




    var script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);

}


function addWeather(jsonResponse) {
    currentConditions.push("Current Conditions:");
    currentConditions.push("Weather: " + jsonResponse.current_observation.weather);
    currentConditions.push("Temperature: " + jsonResponse.current_observation.temp_c + " Degrees Celsius");
    currentConditions.push("Relative Humidity: " + jsonResponse.current_observation.relative_humidity);
    currentConditions.push("Wind Direction: " + jsonResponse.current_observation.wind_dir);
    currentConditions.push("Wind Speed: " + jsonResponse.current_observation.wind_kph + "kph");
    currentConditions.push("Last updated at: " + clock.toLocaleString());



    for (var x = 0; x < currentConditions.length; x++) {
        var p = document.createElement('p');
        p.innerHTML = currentConditions[x];
        div.appendChild(p);
    }

}

function getTime() {

    var p = document.createElement('p');
    p.setAttribute("class", "time");
    p.innerHTML = "Last updated at: " + clock.toLocaleString();
    div.appendChild(p);
}