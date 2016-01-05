(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .controller('TicketController', ['$scope', 'TicketService', function($scope, ticketService) {
            $scope.ticketService = ticketService;

            $scope.updateTicket = function (id, ticket) {
                ticketService.updateTicket(id, ticket);
            };

            $scope.removeTicket = function (id) {
                ticketService.removeTicket(id);
            };

            $scope.addTicket = function () {
                ticketService.addTicket();
            };
        }]);
})();