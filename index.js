function renderMap(geo, geoGenerator) {

    // 暫時將 api 替換成自行測試用的資料
    // fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314")
    fetch("temp.json")
        .then(res => {
            return res.json();
        })
        .then(data => {
            var dataWithWeather = formatData(geo, data);
            // console.log(dataWithWeather);
            var color = d3.scale.linear().domain([0,100]).range(["#d6e7f0","#005dc5"]);

            var temp =  d3.select("svg").selectAll("path").data(dataWithWeather);
            temp.enter().append("path");
            
                d3.select("svg").selectAll("path")
                .attr('stroke', '#005dc5').attr('stroke-width', '0.5').attr({
                    d: geoGenerator,
                    fill: function(d){
                        return color(d.properties.weather);
                    }
                });

            // temp.exit().remove();

        })
        .catch(err => {
            console.log('oh no');
            console.log(err);
        });

    console.log("weather");
}

function initMap() {
    var width = 800;
    var height = 800;
    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        // .style("display", "block")
        // .style("margin", "auto");

    var projection = d3.geo.mercator().center([121, 24]).scale(6500).translate([width / 2,
        height / 2.5
    ]);

    var geoGenerator = d3.geo.path()
        .projection(projection);

    return geoGenerator;
}

function formatData(geo, weather) {
    console.log(geo.features);

    geo.features.forEach(function(city){
        // console.log(city.properties.COUNTYNAME);
        weather.records.location.forEach(function(element) {
            // console.log(element);
            if (element.locationName === city.properties.COUNTYNAME) {
                // console.log(element.weatherElement[1].time[0].parameter.parameterName);
                city.properties.weather = element.weatherElement[1].time[0].parameter.parameterName;
            }
        });
    });

    return geo.features;
}