(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var greenColor = {color:"green"};
  var redColor = {color:"red"};

  $scope.items = "";
  $scope.color = greenColor;
  $scope.msg = "";

  $scope.checkItems = function(){
    var items = $scope.items;
    if(items == ""){
      $scope.color = redColor;
      $scope.msg = "Please enter data first";
    } else {
      $scope.color = greenColor;
      var itemSplit = items.split(",");
      if(itemCount(itemSplit) > 3){
        $scope.msg = "Too much!";
      } else {
        $scope.msg = "Enjoy!";
      }
    }
  };
}

function itemCount(items){
  var count = 0;
  items.forEach(function(e) {
    if(e.trim() != "")
      count++;
  });
  return count;
}

})();
