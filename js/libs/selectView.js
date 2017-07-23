/*
 * @date     2016-01-23
 * @author   Tongshuang
 */

var selectView = function(){
    /*
     TODO: add comments to every function
      */
    var selectView = function(newData, element) {
        this.element = element;

        this.container = d3.select(element[0]).append('div');
        this.margin = {top: 20, right: 5, bottom: 10, left: 5};
        this.width  = this.element[0].clientWidth - this.margin.right - this.margin.left;
        this.height = this.element[0].clientHeight- this.margin.top - this.margin.bottom;
        this.rawData = newData;
    };
    return selectView;
}();

// class function
Object.defineProperties(selectView.prototype, {

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
            this.renderScore();
        }
    },

    initRender:{
        /*
        * Init the whole viz: create svg and axis
        * */
        value: function(){
            var svg =  this.container.append('svg')
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.top + this.margin.bottom);
            this.svg = svg;

            this.panel = this.svg.append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
        }
    },

    dataProcess: { // finished
        /*
        * Process and store all the data for the bar chart.
        * */
        value: function(){
            var Obj = this;
            var irrelevant = this.rawData.irrelevant,
                relevant = this.rawData.relevant;
            var numScale = function(d){
                return d;
            };

            var scoreScale = d3.scale.linear()
                .domain([0, 100]).range([Obj.height, 0]);

            var color = d3.scale.category20c().range(),
                colorScale = {low: color[1], high: color[5]}; // neg, pos

            if (relevant < irrelevant)
                this.scoreArr = [
                    {opt: 'irrelevant', optDisplay: 'Not Relevant',
                        score: numScale(this.rawData.irrelevant),
                        color: colorScale.high},
                    {opt: 'relevant', optDisplay: 'Relevant',
                        score: numScale(this.rawData.relevant),
                        color: colorScale.low}
                ];
            else
                this.scoreArr = [
                    {opt: 'irrelevant', optDisplay: 'Not Relevant',
                        score: numScale(this.rawData.irrelevant),
                        color: colorScale.low},
                    {opt: 'relevant', optDisplay: 'Relevant',
                        score: numScale(this.rawData.relevant),
                        color: colorScale.high}
                ];

            this.scale = {scoreScale: scoreScale, colorScale: colorScale};
            this.axis = {yAxis: d3.svg.axis().scale(scoreScale).orient("left")};
        }
    },

    renderAxis:{
        value: function (){
            var Obj = this, axis = this.axis;

            this.panel.append("g")
                    .attr({
                        'class': 'yAxis axis',
                        'transform': 'translate(' + Obj.width/2 + ', 0)'
                    })
                    .call(axis.yAxis)
                    .append("text").text('Score')
                    .attr({
                        'y': -20,
                        'dy': '.71em'
                    });

        }
    },


    renderScore: {
        value: function () {
            var Obj = this, scale = this.scale;
            var x0= 40; //x offset
            var bWidth= Obj.width /2 -  x0; //button width
            var bHeight= 25; //button height

            if (this.panel.selectAll('circle.circle-score').empty()) {
                var group = this.panel.selectAll('g.score')
                    .data(Obj.scoreArr).enter().append('g');

                circle = group.append('circle')
                    .attr({
                        'stroke': 'white',
                        'fill': function (d) {return d.color},
                        'cx': Obj.width/2,
                        'cy': function(d,i){return scale.scoreScale(d.score)},
                        'r': 10,
                        'class': function(d,i){return 'circle circle-score circle-score-' + d.opt},
                    });


                rect = group.append("rect")
                    .attr({
                        'width': bWidth,
                        'height': bHeight,
                        'x': function(d){
                            if (d.opt == 'relevant') return Obj.width/2 - x0 - bWidth;
                            else return Obj.width/2 + x0
                        },
                        'y': function(d,i){return scale.scoreScale(d.score) - bHeight/2},
                        'rx': 5,
                        'ry': 5,
                        'fill': function (d) { return d.color},
                        'class': function(d){return 'rect rect-score rect-score-' + d.opt},
                    })

                line = group.append('line')
                    .attr({
                        'stroke': function (d) {return d.color},
                        'stroke-width': 1,
                        'x1':  function(d){
                            if (d.opt == 'relevant') return Obj.width/2 - x0;
                            else return Obj.width/2 + x0
                        },
                        'x2': Obj.width/2,
                        'y1': function(d){return scale.scoreScale(d.score)},
                        'y2': function(d){return scale.scoreScale(d.score)},
                        'class': function(d,i){return 'line line-score line-score-' + d.opt},
                    });

                group.append("text")
                    .text(function(d){
                        return d.optDisplay + ', ' + d.score.toFixed(0)
                    })
                    .attr({
                        'x': function(d){
                            if (d.opt == 'relevant') return Obj.width/2 - x0 - bWidth/2;
                            else return Obj.width/2 + x0 + bWidth/2
                        },
                        'y': function(d,i){return scale.scoreScale(d.score)},
                        'text-anchor': 'middle',
                        'fill': 'white',
                        'dominant-baseline': 'central',
                        'font-weight': 'bold',
                        'font-size': 16,
                        'class': function(d,i){return 'text text-score text-score-' + d.opt},
                    });
            }
        }
    }
});