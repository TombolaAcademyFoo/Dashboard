(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.BingoUsers')
        .controller('BingoUsersController', ['$scope', 'BingoUserService', function($scope, bingoUserService){

            var validateAndUpdate = function(fieldName, updateMethodName, githubUser){
                if(!$scope.userList.$dirty){
                    return;
                }
                if(githubUser[fieldName]){
                    $scope.githubUserService[updateMethodName](githubUser);
                }
                else {
                    bingoUserService.getCurrentUsers();
                }

            };

            $scope.bingoUserService = bingoUserService;

            $scope.updateUsername = function (bingoUser){
                validateAndUpdate('username', 'updateUsername', bingoUser);
            };

            $scope.updatePassword = function (bingoUser){
                validateAndUpdate('forename', 'updateForename', bingoUser);
            };

            $scope.updateUsername = function (bingoUser){
                validateAndUpdate('surname', 'updateSurname', bingoUser);
            };

            $scope.add = function(){
                if(!bingoUserService.newUser.username || !bingoUserService.newUser.password || !bingoUserService.newUser.balance ){
                    return;
                }
                bingoUserService.addUser();
            };

            $scope.remove = function(bingoUser){
                bingoUserService.removeUser(bingoUser);
            };

            bingoUserService.setUpdateCallback(function(){
                if($scope.userList){
                    $scope.userList.$setPristine();
                }
            });

            bingoUserService.getCurrentUsers();

        }]);
})();