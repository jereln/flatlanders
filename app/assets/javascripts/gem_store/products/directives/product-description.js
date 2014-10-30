//=require_self
(function() {
  var app = angular.module('GemStore');
  app.directive("productDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "products/description.html"
    };
  });
})()