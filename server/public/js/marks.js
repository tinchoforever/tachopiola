var width = 300,
    height = 300,
    radius = Math.min(width, height),
    spacing = .09;

var color = d3.scale.linear()
    .range(["hsl(-180,50%,50%)", "hsl(180,50%,50%)"])
    .interpolate(interpolateHsl);

var arc = d3.svg.arc()
    .startAngle(0)
    .endAngle(function(d) { return d.value * 2 * Math.PI; })
    .innerRadius(function(d) { return d.index * radius; })
    .outerRadius(function(d) { return (d.index + spacing) * radius; });


window.initMark = function(svg, mark){
    var executed = 0;
    var recycleHandler = {
      value: mark.r1,
      moment: Date.now ,
      progress : 0,
      times: 0,
      executed:false,
      start: Date.now(),
      init : function(){

      },
      getProgress : function(){

        if (this.progress < 100){
          this.progress = this.progress + this.value/100;
        }
        return (this.progress / 100);
      }
  };
  var reutilizeHandler = {
      value: mark.r2,
      moment: Date.now ,
      progress : 0,
      times: 0,
      executed:false,
      start: Date.now(),
      init : function(){

      },
      getProgress : function(){

        if (this.progress < 100){
          this.progress = this.progress + this.value/100;
        }
        return (this.progress / 100);
      }
  };
  var reduceHandler = {
      value: mark.r3,
      moment: Date.now ,
      progress : 0,
      times: 0,
      executed:false,
      start: Date.now(),
      init : function(){

      },
      getProgress : function(){

        if (this.progress < 100){
          this.progress = this.progress + this.value/100;
        }
        return (this.progress / 100);
      }
  };


  var field = svg.selectAll("g")
      .data(fields)
    .enter().append("g");

  field.append("path");
  field.append("text");
  d3.transition().duration(0).each(tick);
  d3.select(self.frameElement).style("height", height + "px");
  function tick() {

    field = field
        .each(function(d) { this._value = d.value; })
        .data(fields)
        .each(function(d) { d.previousValue = this._value; });

    field.select("path")
      .transition()
        .ease("elastic")
        .attrTween("d", arcTween)
        .style("fill", function(d) { return color(d.value); });

    field.select("text")
        .attr("dy", function(d) { return d.value < .5 ? "-.5em" : "1em"; })
        .text(function(d) { return d.text; })
      .transition()
        .ease("elastic")
        .attr("transform", function(d) {
          return "rotate(" + 360 * d.value + ")"
              + "translate(0," + -(d.index + spacing / 2) * radius + ")"
              + "rotate(" + (d.value < .5 ? -90 : 90) + ")"
        });

      if (executed < 100){
        //console.log(executed);
        setTimeout(tick, 100 - Date.now() % 1000);
        executed++;
      }
      //executed = true;

  }

  function arcTween(d) {
    var i = d3.interpolateNumber(d.previousValue, d.value);
    return function(t) { d.value = i(t); return arc(d); };
  }



  function fields() {


    var now = new Date;
    return [
      {index: .1, text: recycleHandler.value, value: recycleHandler.getProgress()},
      {index: .2, text: reutilizeHandler.value, value: reutilizeHandler.getProgress()},
      {index: .3, text: reduceHandler.value, value: reduceHandler.getProgress()},
    ];
  }




};


 // Avoid shortest-path interpolation.
  function interpolateHsl(a, b) {
    var i = d3.interpolateString(a, b);
    return function(t) {
      return d3.hsl(i(t));
    };
  }

