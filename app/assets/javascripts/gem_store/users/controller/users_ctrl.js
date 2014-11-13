(function(){
  var app =angular.module('GemStore');
  app.controller('UsersCtrl', ['$scope', '$http', '$cookieStore', function($scope, $http, $cookieStore) {
    $scope.create = function(user) {
      $http({
        method: 'POST',
        url: '/users',
        data: { user: user}
      })
      .success(function(data) {
        console.log(data);
        $cookieStore.put('logged_user', data);
        user.signUp = false;
        $scope.user = {};
      })
      .error(function(data, status){
        console.log(data);
        console.log(status);
      })
    };

    $scope.signIn = function(user){
      $http({
        method: 'POST',
        url: '/users/sign_in',
        data: { user: user}
      })
      .success(function(data){
        $cookieStore.put('logged_user', data);
        user.logIn = false;
        $scope.user = {};
      })
      .error(function(data,status){
        console.log(data);
        console.log(status);

      });
    };

    $scope.signOut = function() {
      $http({
        method: 'DELETE',
        url: 'users/sign_out'
      })
      .success(function() {
        $cookieStore.remove('logged_user');
      })
      .error(function(status) {
        console.log(status);
      })
    };
  }])
})()