(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Games')
        .controller('GameController', ['$scope', 'GameService', function($scope, gameService) {
            $scope.gameService = gameService;

            $scope.updateGame = function (game) {
                gameService.updateGame(game);
            };

            $scope.removeGame = function (id) {
                gameService.removeGame(id);
            };

            $scope.addGame = function () {
                if(!gameService.newGameFromUi.ordertocall){
                    return;
                }
                gameService.addGame();
            };
        }]);
})();