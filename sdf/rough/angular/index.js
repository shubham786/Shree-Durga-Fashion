var rootModule = angular.module('rootModule', ["ngRoute"]);
rootModule.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "one.html",
            controller: "c_one"
        })
        .when("/red", {
            templateUrl: "red.htm"
        })
        .when("/green", {
            templateUrl: "green.htm"
        })
        .when("/blue", {
            templateUrl: "blue.htm"
        });
});
rootModule.controller('rootController', function ( $scope, $http) {
});