//=require_self
(function() {
  var app = angular.module('GemStore');
  app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "products/reviews.html"
    };
  });
})()