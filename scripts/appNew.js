(function(){
    "use strict";
    angular.module("todoApp", ['ngRoute','ngTouch','ui.grid','ui.grid.pagination'])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'pages/home.html',
                    controller: 'loginController'
                }).
                when('/home', {
                    templateUrl: 'pages/home.html',
                    controller: 'loginController'
                }).        
                when('/comments', {
                    templateUrl: 'pages/comments.html',
                    controller: 'commentController'
                }).
                when('/list', {
                    templateUrl: 'pages/List.html',
                    controller: 'listController'
                }).            
                otherwise({
                    redirectTo: '/'
                });
    }]);    
})();
