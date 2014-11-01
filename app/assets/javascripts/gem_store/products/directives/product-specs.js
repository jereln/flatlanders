//=require_self
(function() {
  var app = angular.module('GemStore');
  app.directive("productSpecs", function() {
    return {
      restrict:"A",
      templateUrl: "products/specs.html"
    };
  });
})()