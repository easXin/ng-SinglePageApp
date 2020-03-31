angular.module('myApp',[])
      .controller('myCtrl',['$scope',function($scope){
            $scope.msg='';
            $scope.getCount=function () {
                  if($scope.msg.length>100){
                        $scope.msg= $scope.msg.slice(0,100);
                  }
                  return 100 - $scope.msg.length;
            }
      }]);