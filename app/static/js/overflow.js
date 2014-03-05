var margin = {top: 50, right: 20, bottom: 70, left: 80},
    width = 575 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], 0.1);

var y = d3.scale.linear()
    .range([height-1, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format(",.0f"));

var chart = d3.select('#chart')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

d3.csv("static/data/sewage/overflow.csv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.amount; })]);

  chart.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".10em")
        .attr("transform", function(d) {
            return "rotate(-65)";
        });

  chart.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Volume (gallons)");

  chart.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.amount); })
      .attr("height", function(d) { return height - y(d.amount); });

    var bar = chart.selectAll(".bar");

    chart.append("rect")
        .attr("width", 240)
        .attr("height", 100)
        .attr("x", 90)
        .attr("y", 150)
        .attr("fill", "#ddd")
        .attr("class", "info-rect")
        .attr("fill-opacity", "0.8");

    var legendX = 110;
    var legendY = 180;

    var waterBody = chart.append("text")
        .attr("x", legendX)
        .attr("y", legendY)
        .attr("class", "water-body");

    var municipality = chart.append("text")
        .attr("x", legendX)
        .attr("y", legendY + 10)
        .attr("font-size", "10px")
        .attr("class", "municipality");

    var reason = chart.append("text")
        .attr("display", "none")
        .attr("x", legendX)
        .attr("y",legendY + 25)
        .attr("font-size", "12px")
        .attr("class", "reason")
        .text("Reason:");

    var type = chart.append("text")
        .attr("x", legendX)
        .attr("y", legendY + 35)
        .attr("font-size", "10px")
        .attr("class", "type");

    var volume = chart.append("text")
        .attr("x", legendX)
        .attr("y", legendY + 45)
        .attr("font-size", "10px")
        .attr("class", "volume");


    bar.on("mouseover", function(d) {
        chart.select(".hold-over")
            .attr("display", "none");
        reason.attr("display", "block");
        waterBody.text(d.water_body);
        municipality.text(d.municipality);
        type.text(d.type);
        var dVolume;
        if (d.amount == 999) {
            dVolume = "< 1,000";
        } else {
            dVolume = commaSeparateNumber(d.amount);
        }
        volume.text("Total Volume Discharged: " + dVolume + " gallons");
    });

    chart.append("text")
        .attr("x", 100)
        .attr("y", 205)
        .attr("class", "hold-over")
        .attr("font-size", "12px")
        .text("Mouse over an event for more information");
});

chart.append("text")
    .attr("class", "more-info")
    .attr("width", "150px")
    .attr("x", 95)
    .attr("y", -35)
    .attr("font-size", "14px")
    .text("Wastewater Discharge Events (2013)");

chart.append("text")
    .attr("x", 150)
    .attr("y", 445)
    .attr("font-size", "12px")
    .attr("class", "x-axis")
    .text("Discharge Events By Date");

function type(d) {
  d.amount = +d.amount;
  return d;
}
