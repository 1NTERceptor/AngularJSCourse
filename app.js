var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    
    console.log($scope);
    console.log($log);
    console.log($filter);
    console.log($resource);
    
    console.log("Hello World");
    console.info("info");
    console.warn("warn");
    console.debug("debug");
    console.error("error");

    $scope.name = "John Doe";
    $scope.formattedname = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info("Formatted Name: " + $scope.formattedname);
});