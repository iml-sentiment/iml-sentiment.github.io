
TextVisApp.directive('accuracyDirective',function(){
    return {
        restrict: 'EA',
        link: function(scope, element) {
            var handler = null;

            scope.$watchCollection('[iterlog, iterlog.length]',function(newData){
                ifExistList = newData[1];
                newData = newData[0];
                if(newData == undefined) return;
                if (handler) handler.clearAll();
                if (ifExistList == 0) return;

                handler = new AccuracyView(newData, element);
                handler.render();
            }, true);
        }
    }
});