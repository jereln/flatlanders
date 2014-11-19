//= require_self
//= require_tree ./gem_store

(function() {
  var app = angular.module('GemStore', ['ngCookies']);
  app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]')
    .attr('content');
    $httpProvider.defaults.headers.common.Accept = 'application/json';
  }]);

  app.run(['$rootScope', '$cookieStore', function($rootScope, $cookieStore) {
    $rootScope.isLoggedIn = function () {
      return ($cookieStore.get('logged_user') ? true : false);
    };
  }]);
})()
