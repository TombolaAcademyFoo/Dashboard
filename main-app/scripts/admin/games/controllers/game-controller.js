(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Games')
        .controller('GameController', ['$scope', 'GameService', function($scope, gameService) {
            $scope.gameService = gameService;
            gameService.getCurrentGames();
        }]);
})();
