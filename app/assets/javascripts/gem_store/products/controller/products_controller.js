//=require_self
app.controller('StoreController', ['$http', "$scope", function($http, $scope){
  $scope.products = [];
  $http.get('/products/store-products.json').success(function(data){
      $scope.products = data;
  });
}]);

app.controller('ReviewController', function($scope) {
  $scope.review = {};

  $scope.addReview = function(product) {
    product.reviews.push($scope);
    $scope.review = {};
  };
});
