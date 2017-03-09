angular.module("todoApp",["ngRoute"])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider)
{
    $routeProvider.when('/home',{
        templateUrl:"pages/home.html"
    }).when('/comments',{
        templateUrl:"pages/comments.html"
    }).otherwise({
      redirectTo: '/'
    });
/*    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });*/
}])
.controller("loginController",function($scope,$http) {
    $scope.loginStatus = false;
    $scope.users = [
        { name:"raj",password:"raj" },
        { name:"ashwin",password:"ashwin" },
        { name:"raju",password:"raju" },
        { name:"piyush",password:"piyush" }
    ];

    $scope.checkLogin = function() {
      angular.forEach($scope.users,function(user,index)
      {
            if($scope.username == user.name && $scope.password == user.password) {
                $scope.loginStatus = false;
                window.location.href = "comments";
            } else {
                $scope.loginStatus = true;
            }
      });
    }
});
