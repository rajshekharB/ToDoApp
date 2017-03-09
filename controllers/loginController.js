(function(){
    angular.module("todoApp")
    .controller("loginController",function($scope,$http,$rootScope) {
        $http({method: 'GET', url: 'data/data.json'}).then(function(res){
            $scope.users = res.data;
        });

        if($rootScope.loginStatus)
               window.location.href = "#/comments";
        
        $scope.checkLogin = function() {
          angular.forEach($scope.users,function(user,index)
          {
                if($scope.username == user.name && $scope.password == user.password) {
                    $rootScope.loginStatus = false;
                    window.location.href ="#/comments";                
                } else {
                    $rootScope.loginStatus = true;
                }
          });
        }
    });
})();
