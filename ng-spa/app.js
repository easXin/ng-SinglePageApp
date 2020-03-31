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
                        $scope.todos=[
              {name:'eat',isChecked:false},
              {name:'sleep',isChecked:true},
              {name:'code',isChecked:false},
            ];
            $scope.add=function(){
              // collect and sort the data in an object
              var obj = {
                name:$scope.newToDo,
                isChecked:false
              };
              // append to the todoList
              $scope.todos.unshift(obj);
              $scope.newToDo='';
            }
            $scope.del=function () {
                var oldToDo = $scope.todos;
                $scope.todos=[];
                oldToDo.forEach(function(item,index){
                  if(!item.isChecked){
                    $scope.todos.push(item);
                  }
                })
            }
      }]);
