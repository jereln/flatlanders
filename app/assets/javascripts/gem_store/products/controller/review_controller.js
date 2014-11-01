(function() {
  var app = angular.module('GemStore');
  app.controller('ReviewController', ['$scope', function($scope) {
    $scope.review = {};

    $scope.addReview = function(product) {
      product.reviews.push($scope);
      $scope.review = {};
    };
  }]);
})()