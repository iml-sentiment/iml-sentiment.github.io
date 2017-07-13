
TextVisApp.controller('ArtificalController', ['$scope', 'dataService','communService',
function ($scope, dataService, communService) {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA1pnotZgSJaRa-WQ6BjGzBqgBDSqhjVx8",
        authDomain: "overfitanalysis.firebaseapp.com",
        databaseURL: "https://overfitanalysis.firebaseio.com",
        projectId: "overfitanalysis",
        storageBucket: "",
        messagingSenderId: "49463188902"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    $scope.quizQuestions = quizQuestions;
    $scope.deployed = false;

    $scope.stage = 'intro';
    $scope.running = false;

    // for recording score
    $scope.interview = {example: null, polarity: null, score: null, score_i: null};

    /*-- Configuration --*/
    $scope.currentStage = function (set) {
        if ($scope.iterNum < 0 && ($scope.stage == 'quiz' || set =='quiz'))
            $scope.stage =  'quiz';
        else if ($scope.iterNum>=0 && $scope.iterNum < $scope.totalIter)
            $scope.stage = 'task';
        else if ($scope.iterNum >= $scope.totalIter)
            $scope.stage = 'survey';
        else if ($scope.stage == 'complete')
            $scope.stage = 'complete';
        else
            $scope.stage = 'intro';
    };

    $scope.example_methodArr = [
        {name: 'Modified', value: 'modify'},
        {name: 'Boundary confidence', value: 'confidence'},
        {name: 'Proportional', value: 'prop'},
        {name: 'Random', value: 'random'}
    ];
    // selected methods
    $scope.displayF1_method = 'correct'; // selected method/F1
    $scope.example_method = 'prop'; // selected method/example

    /*-- Iteration based var --*/
    $scope.feature = null; // feature tested
    $scope.iterlog = []; // log the information of each iteration
    $scope.iterAction = [];
    $scope.iterNum = -2; // get the iteration number. When editing 1st word: iter 0
    $scope.totalIter = 50;
    $scope.F1 = null;

    // when an algorithm option is selected from the bar
    $scope.initTrain = function(){
        $scope.started = true;
        $scope.running = true;
        $('.btn').attr('disabled', $scope.running);
        // init the train
        $scope.train();
        $scope.addLog(true);
        $scope.train();
    };


    // retrain to get F1
    $scope.train = function(){
        $scope.iterNum++;
        if ($scope.iterNum >= 0)
            $scope.running = false;

        $('.btn').attr('disabled', $scope.running);

        $scope.curF1 = {
            dev: {true:{}, display:{}},
            test:{}
        };
        if ($scope.featureEditlist == null){// input the data for once.
            $scope.featureEditlist = shuffle(featurelist.slice(0, $scope.totalIter))
                .concat(featurelist.slice($scope.totalIter));
            $scope.examples = examples;
            $scope.testedArr = [];
            $scope.tottestArr = clone($scope.featureEditlist);
        }
        $scope.ifConsider = null;
        $scope.feature = $scope.featureEditlist[0];
        if ($scope.iterNum >= 0)
            $scope.feature = $scope.featureEditlist[$scope.iterNum];

        $scope.displayF1();
        // update doc
        docData = $scope.examples[$scope.feature.word];
        $scope.doclist = $scope.displayDoc(docData);
        $scope.currentStage();

    }

    $scope.nextIter = function (opt) {
        $scope.running = true;
        $('.btn').attr('disabled', $scope.running);
        $scope.ifConsider = opt;
        $scope.addLog();
        $scope.train();
        // modify the view to be back to default
        if ($scope.iterNum > $scope.totalIter)
            return;
    };

    /*
    * For adding the log data.
    * @param ifInit : <bool> if this is the init condition.
    * */
    $scope.addLog = function(ifInit){
        time = +new Date();
        feature = $scope.feature;
        if (ifInit == true) {
            feature = {word: '[INIT]', score: 0, order: 0};
            oldTime = time;
        }
        else {
            feature = $scope.feature;
            oldTime = $scope.iterlog.last().timestamp;
        }

        newIter = {
            feature: feature.word,
            ifConsider: $scope.ifConsider,
            //displayF1_method: $scope.displayF1_method_true,
            F1: $scope.F1,
            timestamp: time,
            duration: (time-oldTime) / 1000
        };
        $scope.iterlog.push(newIter);
        $scope.iterAction.push($scope.ifConsider);
    }

    /*-- Savelog --*/
    $scope.saveLog = function () {
        dataService.onSaveLog($scope.iterlog);
    };

    $scope.displayF1 = function () {
        $scope.F1 = $scope.feature.F1;
        $scope.betterOpt = 'CONSIDERING';
        $scope.worseOpt = 'IGNORING';
        $scope.action = 'improve';

        if ($scope.F1.ignore > $scope.F1.consider){
            $scope.betterOpt = 'IGNORING';
            $scope.worseOpt = 'CONSIDERING';
        }
        if ($scope.F1.ignore == $scope.F1.consider)
            $scope.action = 'not affect';
    };



    $scope.displayDoc = function (featureDoc) {
        arr = [];
        data = featureDoc.map(function(doc){
            arr = arr.concat([doc.displayArr[0]]);
        });
        return arr;
    };
    
    $scope.submit = function () {
        if ($scope.interview.example == null ||
            $scope.interview.score == null ||
            $scope.interview.score_i == null ||
            $scope.interview.polarity == null)
            alert('Please answer all the questions!');
        else{
            timestamp = +new Date();
            //dataService.onSaveUser($scope.iterlog, $scope.interview, +new Date());
            console.log($scope.iterlog);
            database.ref(timestamp).set({
                logData:$scope.iterlog,
                interview: $scope.interview,
                timestamp:timestamp
            });

            function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max);
              return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            }
            $scope.code = 'P' + timestamp.toString() + getRandomInt(1000, 9999).toString();

            alert('Thank you for participating in the study! ' +
                'Please submit the code to get your reward: P', timestamp);
            close();

        }
    };

    $scope.start = function () {
        canStart = true;
        for (var i =0; i < $scope.quizQuestions.length; i++){
            q = $scope.quizQuestions[i];
            canStart = canStart && (q.setAnswer == q.answer);
            if (canStart == false){
                alert('You need to pass all the questions first!');
                return;
            }
        }
        $scope.initTrain();
    }
}]);