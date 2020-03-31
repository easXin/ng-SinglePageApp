angular.module('myApp',[])
      .controller('myCtrl',['$scope',function($scope){
            $scope.msg='';
            $scope.getCount=function () {
                  if($scope.msg.length>100){
                        $scope.msg= $scope.msg.slice(0,100);
                  }
                  return 100 - $scope.msg.length;
            }
            $scope.save=function(){
              // use json
                alert('note is saved');
                localStorage.setItem('note_key',JSON.stringify($scope.msg));
                $scope.msg='';
            }
            $scope.read=function(){
                $scope.msg=JSON.parse(localStorage.getItem('note_key')||[]);
            }
            $scope.remove=function(){
                localStorage.removeItem('note_key');
                $scope.msg='';
            }
      }]);
