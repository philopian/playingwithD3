'use strict';

angular.module('nvd3PlayingAroundApp')
  .controller('MainCtrl', function ($scope) {



	$scope.exampleData = [
	                { key: "One", 	y: 5},
	                { key: "Two",	y: 2},
	                { key: "Three",	y: 9 },
	                { key: "Four",	y: 7},
	                { key: "Five",	y: 4},
	                { key: "Six",	y: 3},
	                { key: "Seven",	y: 9}
	];

    $scope.xFunction = function(){
        return function(d) {
            return d.key;
        };
    }
    $scope.yFunction = function(){
        return function(d) {
            return d.y;
        };
    }


    var colorArray = ['#000000', '#660000', '#CC0000', '#FF6666', '#FF3333', '#FF6666', '#FFE6E6'];
	$scope.colorFunction = function() {
		return function(d, i) {
	    	return colorArray[i];
	    };
	}






  });
