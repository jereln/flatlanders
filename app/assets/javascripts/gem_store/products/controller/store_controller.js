//=require_self
app.controller('StoreController', ['$http', "$scope", function($http, $scope){
  $scope.products = [];
  $http.get('/products/store-products.json').success(function(data){
      $scope.products = data;
  });
}]);
