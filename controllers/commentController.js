(function(){
    angular.module("todoApp")
    .controller('commentController', ['$scope', '$log', '$http','$rootScope', function ($scope, $log, $http,$rootScope) {
    $scope.comments = [];
    $scope.showMe = function(index) {
        alert( $scope.comments[index-1].name);
    };
    $scope.removeComment = function(row){
        var index = $scope.gridOptions.data.indexOf(row.entity);
        $scope.gridOptions.data.splice(index,1);
    };
                
    $scope.gridOptions = {
        totalItems:30,
        paginationPageSize: 5,
        paginationPageSizes: [5, 10, 15],
        minRowsToShow: 5,
        enablePaginationControls: true,
        paginationCurrentPage: 1
        };
        $scope.gridOptions.enableColumnMenus=false;
        $scope.gridOptions.enableFiltering=true;
        $scope.gridOptions.columnDefs = [
         { field: 'Comment-Sr',displayName:'Sr.No', cellTemplate:'<span>{{rowRenderIndex+1}}</span>'},
         { field: 'Comment_Description',displayName:'Comments'},
         { field: 'EDIT',
             cellTemplate:'<button class="btn btn-success" ng-click="grid.appScope.editComment(rowRenderIndex)"><i class="glyphicon glyphicon-edit"></i></button>'},
       {field:'REMOVE',
        cellTemplate:'<button class="btn btn-success" ng-click="grid.appScope.removeComment(row)"><i class="glyphicon glyphicon-trash"></i></button>',
         }
       ];
 
        $scope.update = false;
        $scope.updateIndex;
           if(!$rootScope.loginStatus)
               window.location.href = "#/home";

        $scope.logout = function() {
            $rootScope.loginStatus = false;
            window.location.href = "#/home";            
        }
        $scope.addComment = function() {
            var object = {};
            object["Comment_Description"]= $scope.userText;
            $scope.gridOptions.data.push(object);
            $scope.userText = "";  
        };

        $scope.editComment = function(index){
            $scope.update = true;
            $scope.userText = $scope.gridOptions.data[index].Comment_Description;
            $scope.updateIndex = index;
        };

        $scope.updateComment = function(){        
            $scope.gridOptions.data[$scope.updateIndex].Comment_Description = $scope.userText;
            $scope.update = false;
            $scope.userText="";
        };
        
    }]);
})();
