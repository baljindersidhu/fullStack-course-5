(function(){
    'use strict';

    const app = angular.module('lunchChecker', [])

    app.controller('indexCtrl', indexCtrl)

    indexCtrl.$inject = ['$scope']

    function indexCtrl($scope){
        $scope.inputVal = "";
        $scope.reaction = "";
        $scope.show_warning = false;
        $scope.getReaction = getReaction;
        $scope.ignoreSpacesAndRecount = ignoreSpacesAndRecount;

        function getReaction(){
            $scope.show_warning = false;
            if($scope.inputVal.length > 0){
                // considers white spaces
                var reactionArr = $scope.inputVal.split(',');
                if(reactionArr.length > 3){
                    $scope.reaction = "Too Much!";
                    var count = $scope.ignoreSpacesAndRecount($scope.inputVal, ',');
                    if(count === 0){
                        $scope.reaction = "";
                    }else if(count < 4){
                        $scope.reaction = "Enjoy!";
                    }
                }else{
                    $scope.reaction = "Enjoy!";
                }
            }else{
                $scope.reaction = "";
                $scope.show_warning = true;
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