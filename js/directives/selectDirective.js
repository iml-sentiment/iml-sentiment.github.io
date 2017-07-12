
TextVisApp.directive('selectDirective',function(){
    return {
        restrict: 'EA',
        link: function(scope, element) {
            var handler = null;
            scope.$watchCollection('[iterNum, F1]',function(newData){
                if(newData[0] < 0 || newData[0] == null) return;
                if(handler) handler.clearAll();
                handler = new selectView(newData[1], element);

                handler.render();
            });
        }
    }
});