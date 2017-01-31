(function(){
    'use strict';

    const app = angular.module('lunchChecker', [])

    app.controller('indexCtrl', indexCtrl)

    indexCtrl.$inject = ['$scope']

    function indexCtrl($scope){
        $scope.inputVal = "";
        $scope.reaction = "";
        $scope.getReaction = getReaction;
        $scope.ignoreSpacesAndRecount = ignoreSpacesAndRecount;

        function getReaction(){
            if($scope.inputVal.length > 0){
                // considers white spaces
                var reactionArr = $scope.inputVal.split(',');
                if(reactionArr.length > 3){
                    $scope.reaction = "Too Much!";
                    var count = $scope.ignoreSpacesAndRecount($scope.inputVal, ',');
                    if(count < 4){
                        $scope.reaction = "Enjoy!";
                    }
                }else{
                    $scope.reaction = "Enjoy!";
                }
            }else{
                $scope.reaction = "";
            }
        }

        function ignoreSpacesAndRecount(inputVal, separator){
            var reactionArr = inputVal.split(separator);
            var count = 0;
            angular.forEach(reactionArr, function(val){
                if(val.length > 0){
                    count++;
                }
            });
            return count;
        }
    }

})();