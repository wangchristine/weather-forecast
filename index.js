var color = d3.scale.linear().domain([0, 100]).range(["#d6e7f0", "#005dc5"]);

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

            var selectMap = d3.select(".map").selectAll("path").data(dataWithWeather);
            selectMap.enter().append("path");

            d3.select(".map").selectAll("path")
                .attr('stroke', '#005dc5').attr('stroke-width', '0.5').attr({
                    d: geoGenerator,
                    fill: function(d) {
                        return color(d.properties.weather[1].time[0].parameter.parameterName);
                    }
                }).on("mouseover", function(d) {
                    console.log(d.properties.COUNTYNAME);
                    d3.select(this).transition()
                        .duration('50')
                        .attr('opacity', '.65');
                    updateDetail(d);
                }).on('mouseout', function (d, i) {
                    d3.select(this).transition()
                        .duration('50')
                        .attr('opacity', '1');
                });

            // selectMap.exit().remove();

        })
        .catch(err => {
            console.log('oh no');
            console.log(err);
        });

    console.log("weather");
}

function initMap() {
    var width = 800;
    var height = 750;
    var svg = d3.select(".map-detail")
        .append("svg")
        .attr("width", "90%")
        .attr("height", height)
        .attr("class", "map")
        .attr("viewBox", "0 0 800 750")
        .attr("preserveAspectRatio", "xMidYMid slice")
        .style("display", "block")
        .style("margin", "auto");

    var projection = d3.geo.mercator().center([121.2, 24.7]).scale(6000).translate([width / 2,
        height / 2.5
    ]);

    var geoGenerator = d3.geo.path()
        .projection(projection);

    return geoGenerator;
}

function initScale() {
    var width = 200;
    var height = 40;
    var div = d3.select(".color-scale")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("display", "block")
        .style("margin", "auto");

    var rects = div.selectAll('.rects').data(d3.range(100))
        .enter().append("rect")
        .attr("class", "rects")
        .attr("x", function(d, i) {
            return i * 2;
        })
        .attr("y", 0)
        .attr("height", height)
        .attr("width", 2)
        .style("fill", function(d) {
            return color(d);
        });

}

function updateDetail(d) {
    $('.city-detail .city').text(d.properties.COUNTYNAME);
    $('.city-detail .percent').text(d.properties.weather[1].time[0].parameter.parameterName + "%");
    $('.city-detail .temperture').text(
        d.properties.weather[2].time[0].parameter.parameterName
        + "°" + d.properties.weather[2].time[0].parameter.parameterUnit
        + " - "
        + d.properties.weather[4].time[0].parameter.parameterName
        + "°" + d.properties.weather[4].time[0].parameter.parameterUnit
    );
    $('.city-detail .description').text(d.properties.weather[0].time[0].parameter.parameterName);
}

function formatData(geo, weather) {
    console.log(geo.features);

    geo.features.forEach(function(city) {
        // console.log(city.properties.COUNTYNAME);
        weather.records.location.forEach(function(element) {
            if (element.locationName === city.properties.COUNTYNAME) {
                city.properties.weather = element.weatherElement;
            }
        });
    });

    return geo.features;
}