var INTERPOLATE = 'monotone',
    DURATION = 700,
    RADIUS = 7


var AccuracyView = function(){
    /*
    * This is the view for visualizing the decision data of Chris's model.
    * */
    var AccuracyView = function(newData, element) {

        // the container
        this.element = element;
        this.container = d3.select(element[0]).append('div');
        // define the svg size
        this.margin = {top: 20, gap: 0, right: 20, bottom: 20, left: 40};
        this.width  = this.element[0].clientWidth - this.margin.right - this.margin.left;
        this.height = this.element[0].clientHeight - this.margin.top - this.margin.bottom;
        this.needInit = true;

        this.rawData = newData;
    };
    return AccuracyView;
}();

Object.defineProperties(AccuracyView.prototype, {
    clearAll:{ // finished
        value: function(){
            /*
             * reset the view and remove svg.
             * */
            d3.select(this.element[0]).selectAll('svg').remove()
        }
    },

    render:{
        /*
         * run the real render process
         * */
        value: function(){
            this.dataProcess();
            this.initRender();
            this.renderAxis();
            this.renderLine();
            this.renderDots();
        }
    },

    initRender:{
        /*
        * Init the whole viz: create svg and axis
        * */
        value: function(){
            // create the svg
            this.needInit = false;
            var svg =  this.container.append('svg')
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.top + this.margin.bottom);
            this.svg = svg;

            this.panel = this.svg.append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        }
    },

    dataProcess: {
        value: function (){

            this.F1 = {}
            this.nTime = this.rawData.map(function(d){return d.timestamp});
            this.ifIncludeArr = this.rawData.map(function(d){return d.ifInclude});

            this.F1.dev = this.rawData.map(function(d){return d.F1.dev.true});
            this.F1.test = this.rawData.map(function(d){return d.F1.test});

            range = d3.extent(d3.merge([
                this.F1.dev.map(function(d){return d.keep}),
                this.F1.dev.map(function(d){return d.del}),
                this.F1.test.map(function(d){return d.keep}),
                this.F1.test.map(function(d){return d.del})]));
            //range = [0.5, 1];
            // scale
            var xScale = d3.scale.linear().domain(d3.extent(this.nTime)).range([0, this.width]),
                yScale = d3.scale.linear().domain(range).range([this.height, 0]);
            var color = d3.scale.category20c().range(),
                colorScale = [color[0], color[8]];
            this.scale = {xScale: xScale, yScale: yScale, colorScale: colorScale};

            // axis
            var xAxis = d3.svg.axis().scale(xScale).orient("bottom"),
                yAxis = d3.svg.axis().scale(yScale).orient("left");
            this.axis = {xAxis: xAxis, yAxis: yAxis};

        }
    },


    renderAxis:{
        value: function (){
            var Obj = this, scale = this.scale, axis = this.axis;
            this.axis.xAxis
                .tickValues(this.rawData.map(function(d){return d.timestamp}))
                .tickFormat(function(d,i){return (d - Obj.rawData[0].timestamp)/1000});
            if (this.panel.select('.xAxis').empty()) {
                this.panel.append("g")
                    .attr({
                        'class': 'xAxis axis',
                        'transform': 'translate(0,' + Obj.height + ')'
                    })
                    .call(axis.xAxis)
                    .append('text').text('Time(s)')
                    .attr({
                        'transform': 'translate(' + Obj.width + ', 0)',
                        'dx': '-7em',
                        'dy': '-1em'
                    });

                this.panel.append("g")
                    .attr({'class': 'yAxis axis precision'})
                    .call(axis.yAxis)
                    .append("text").text('F1 Score')
                    .attr({
                        'transform': 'rotate(-90)',
                        'y': 6,
                        'dy': '.71em'
                    });
            }

            this.panel.select('.xAxis').transition().duration(DURATION).call(axis.xAxis);
            this.panel.select('.yAxis.precision').transition().duration(DURATION).call(axis.yAxis);
        }
    },

    renderLine: {
        value: function(){
            var Obj = this, scale = this.scale;
            // create the line
            var line = d3.svg.line()
                .interpolate(INTERPOLATE)
                .x(function(d, i) {return scale.xScale(Obj.nTime[i]); })
                .y(function(d, i) {
                    if (Obj.ifIncludeArr[i] == 'ignore')return scale.yScale(d.del);
                    else return scale.yScale(d.keep);
                });

            if(this.panel.selectAll('path.line-action').empty()){
                this.panel.selectAll('path.line-action')
                    .data([Obj.F1.dev, Obj.F1.test]).enter()
                    .append('path')
                    .attr({
                        'd': function(d){return line(d)},
                        'class': function(d,i){
                            return 'line line-action line-action-' + i},
                        'fill': 'none',
                        'stroke': function(d,i){return scale.colorScale[i]},
                        'stroke-width': 2,
                        'stroke-dasharray': function(d,i){
                            return i == 1 ? '3, 3' : 'None';
                        }
                    });
            }
        }
    },

    renderDots: {
        /*
        * Render the decision dots.
        * Denotes which decision is taken for real by the algorithm; When initiailized,
        * all the dots should be on the line with maximum current value by default.
        * */
        value: function(){
            var Obj = this, scale = this.scale;
            //this.panel.selectAll('circle.circle-action').remove();
            if (this.panel.selectAll('circle.circle-action').empty()){
                group = this.panel.selectAll('circle.circle-action')
                    .data([Obj.F1.dev, Obj.F1.test]).enter().append('g')
                    .attr({
                        'stroke-width': 2,
                        'stroke': function(d,i){return scale.colorScale[i]},
                        'fill': function(d,i){return scale.colorScale[i]}
                    });

                group.selectAll('.circle-del')
                    .data(function(d){return d}).enter().append('circle')
                    .attr({
                        'stroke': function(d,i){
                            displaySet = Obj.rawData[i].F1.dev.display;
                            if ((displaySet.keep > displaySet.del && Obj.rawData[i].ifInclude == 'ignore')
                            || (displaySet.keep < displaySet.del && Obj.rawData[i].ifInclude == 'include'))
                                return 'red';
                            return 'white'
                        },
                        'cx': function(d,i){return scale.xScale(Obj.nTime[i])},
                        'cy': function(d){return scale.yScale(d.del)},
                        'r': RADIUS,
                        'class': function(d,i){return 'circle circle-del circle-del-' + i},
                    })

                group.selectAll('.circle-keep')
                    .data(function(d){return d}).enter().append('circle')
                    .attr({
                        'cx': function(d,i){return scale.xScale(Obj.nTime[i])},
                        'cy': function(d){return scale.yScale(d.keep)},
                        'r': RADIUS/3,
                        'class': function(d,i){return 'circle circle-keep circle-keep-' + i},
                    })
                    .on('click', function(d,i){Obj.sendSelectIter(i);});

                group.selectAll('line')
                    .data(function(d){return d}).enter().append('line')
                    .attr({
                        'stroke-width': 1,
                        'x1': function(d,i){return scale.xScale(Obj.nTime[i])},
                        'x2': function(d,i){return scale.xScale(Obj.nTime[i])},
                        'y1': function(d){return scale.yScale(d.keep)},
                        'y2': function(d,i){return scale.yScale(d.del)},
                        'class': function(d,i){return 'line line-action line-action-' + i},
                    })
            }
            this.panel.selectAll('circle.circle-action')
                .data([Obj.trainResult, Obj.testResult])
                .transition().duration(DURATION)
        }
    }

});