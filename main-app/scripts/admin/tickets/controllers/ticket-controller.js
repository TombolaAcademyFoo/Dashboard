(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .controller('TicketController', ['$scope', 'TicketService', function($scope, ticketService) {
            $scope.ticketService = ticketService;

            $scope.updateTicket = function (ticket) {
                ticketService.updateTicket(ticket);
            };

            $scope.removeTicket = function (id) {
                ticketService.removeTicket(id);
            };

            $scope.addTicket = function () {
                if(!ticketService.newTicketFromUi.ticket || !ticketService.newTicketFromUi.gameid){
                    console.log("you left a field empty");
                    return;
                }
                ticketService.addTicket();
            };
        }]);
})();