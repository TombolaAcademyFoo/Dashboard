(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .controller('TicketController', ['$scope', 'TicketService', function($scope, ticketService) {
            $scope.ticketService = ticketService;
            //TODO add scope CRUD methods
        }]);
})();