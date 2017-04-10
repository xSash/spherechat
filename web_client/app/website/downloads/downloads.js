'use strict';

angular.module('myApp.downloads', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/downloads', {
    templateUrl: 'website/downloads/downloads.html',
    controller: 'DownloadsCtrl'
  });
}])

.controller('DownloadsCtrl', [function() {

}]);