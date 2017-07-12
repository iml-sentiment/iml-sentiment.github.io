
TextVisApp.directive('logDirective',function(){
    return {
        restrict: 'EA',
        link: function(scope, element) {
            var handler = null;

            scope.$watchCollection('[iterLog, iterLog.length]',function(newData){
                newData = newData[0];
                if(newData == undefined) return;

                if(handler) handler.clearAll();
                handler = new LogView(newData, element);
                handler.render();
            }, true);
        }
    }
});