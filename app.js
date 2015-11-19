var app = angular.module("myApp", []);

app.controller('mainController', [ '$scope', function($scope) {
  $scope.switch = function() {
    if($(".editable").attr("contenteditable")==="false") {
      $(".editable").attr("contenteditable", "true");
      $(".editable").css("color", "blue");
      $("#switch").text("save")}
    else {
      $(".editable").attr("contenteditable", "false");
      $(".editable").css("color", "black")
      $("#switch").text("edit")}
    }
  }]);

app.directive("editable", function () {
  return {
    restrict: "A",
    transclude: true,
    template: '<div class="editable" contenteditable="true" style="color:blue" ng-transclude></div>'
    
  }
  
});
  
