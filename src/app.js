var color = d3.scale.linear().domain([0, 100]).range(["#d6e7f0", "#005dc5"]);

$(function() {
    d3.json("country.json", function(error, geo) {
        if (error) {
            return console.error(error);
        }
        console.log('success');
        console.log(geo.features);

        var geoGenerator = initMap();

        initScale();

        renderMap(geo, geoGenerator);

        setInterval(function() {
            renderMap(geo, geoGenerator);
        }, 5000);

    });

});

function renderMap(geo, geoGenerator) {
    // 暫時將 api 替換成自行測試用的資料
    fetch("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=API_TOKEN")
    // fetch("temp.json")
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
    $('.weather-detail').children().remove();

    var now = new Date();

    for (var i = 0; i < 3; i++) {
        var startTime = new Date(d.properties.weather[0].time[i].startTime);
        var endTime = new Date(d.properties.weather[0].time[i].endTime);
        var dateDesc = "";

        if(now.getDate() == startTime.getDate()){
            dateDesc += "今天";
        }else{
            dateDesc += "明天";
        }
        switch(startTime.getHours()){
            case 0:
                dateDesc = "午夜";
            break;
            case 6:
                dateDesc += "白天";
            break;
            case 12:
                dateDesc += "中午";
            break;
            case 18:
                dateDesc += "晚上";
            break;
        }

        $('.weather-detail').append("<div class=\"col-12 weather-section-detail\">" +
            "<div class=\"weather-img float-right\">" +
            "<img src=\"https://www.cwb.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/" + (startTime.getHours() == 6 ? "day" : "night") + "/" + numToString(d.properties.weather[0].time[i].parameter.parameterValue) + ".svg\">" +
            "<div class=\"description\">" +
                d.properties.weather[0].time[i].parameter.parameterName +
            "</div>" +
            "</div>" +
            "<div class=\"datetime\">" +
                dateDesc +
                "<span>" +
                "(" + d.properties.weather[0].time[i].startTime.slice(-8, -3) + " ~ " + d.properties.weather[0].time[i].endTime.slice(-8, -3) + ")" +
                "</span>" +
            "</div>" +
            "降雨機率:" +
            "<div class=\"percent\">" +
                d.properties.weather[1].time[i].parameter.parameterName + "%" +
            "</div>" +
             "溫度:" +
            "<div class=\"temperture\">" +
                d.properties.weather[2].time[i].parameter.parameterName +
                "°" + d.properties.weather[2].time[i].parameter.parameterUnit +
                " - " +
                d.properties.weather[4].time[i].parameter.parameterName +
                "°" + d.properties.weather[4].time[i].parameter.parameterUnit +
            "</div>" +
             "</div>"
        );
    }
    
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

function numToString(num) {
    return num < 10 ? "0" + num.toString() : num.toString();
}