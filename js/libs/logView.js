/*
 * @date     2016-10-19
 * @author   Tongshuang
 */

var LogView = function(){
    /*
     TODO: add comments to every function
      */
    var LogView = function(newData, element) {
        this.element = element;

        this.container = d3.select(element[0]).append('div');//.attr({'class': 'ScatterViewClass'});
        this.margin = {top: 20, gap: 0, right: 10, bottom: 20, left: 10};
        this.width  = this.element[0].clientWidth - this.margin.right - this.margin.left;
        this.height = this.element[0].clientWidth * 2 - this.margin.top - this.margin.bottom;//this.element[0].clientHeight;

        this.rawData = newData;
    };
    return LogView;
}();

// class function
Object.defineProperties(LogView.prototype, {

    clearAll:{ // finished
        value: function(){
            /*
            * reset the view and remove svg.
            * */
            d3.select(this.element[0]).selectAll("div").remove();
        }
    },

    render:{
        /*
        * run the real render process
        * */
        value: function(){
            this.initRender();
            this.renderDoclist();
        }
    },

    initRender:{
        /*
        * Init the whole viz: create svg and axis
        * */
        value: function(){
            // create the svg
            this.logPanel = this.container.append("table").attr('class', 'logtable');
            this.docElements = this.logPanel.selectAll('.logElements');
        }
    },

    dataProcess: { // todo
        value: function(){
        }

    },

    renderDoclist: {
        /*
         * Draws all the bar chart.
         * */
        value: function () {
            var Obj = this;

            thead = this.logPanel.append("thead");
            tbody = this.logPanel.append("tbody");

            // append the header row
            thead.append("tr")
                .selectAll("th")
                .data(['iter', 'ngram', 'addition'])
                .enter().append("th")
                .text(function(d) { return d; });

             // create a row for each object in the data
            var rows = tbody.selectAll("tr")
                .data(this.rawData).enter().append("tr")
                .attr('class', function(d,i){return 'logtable logtable-' + i})
                .on('click', function(d,i){Obj.sendSelectIter(i);});

            // create a cell in each row for each column
            var cells = rows.selectAll("td")
                .data(function(d,index) {
                    ngram = d.set.length > 0 ? d.set: 'N/A';
                    addition_add = "";
                    for (i =0; i < d.addition.add.length; i++){
                        if (i > 5){addition_add += '...';break;}
                        addition_add += d.addition.add[i];
                        //if (i != d.addition.add.length)
                        addition_add += '</br>'
                    }
                    addition_delete = "";
                    for (i =0; i < d.addition.delete.length; i++){
                        if (i > 5){addition_delete += '...';break;}
                        addition_delete += d.addition.delete[i];
                        if (i != d.addition.delete.length) addition_delete += '</br>'
                    }
                    add = addition_add.length > 0 || addition_delete.length > 0 ?
                        '<span class="addFeature">' + addition_add
                        + '</span><span class="deleteFeature">'
                        + addition_delete + '</span>': 'N/A';
                    return [
                        {column:'iter', value: index},
                        {column:'ngram', value: ngram},
                        {column:'addition', value: add}
                    ]
                })
                .enter().append("td")
                .html(function(d) { return d.value; });
        }
    }
});