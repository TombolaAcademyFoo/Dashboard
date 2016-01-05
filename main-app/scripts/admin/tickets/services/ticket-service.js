(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .service('TicketService', ['TaBaseProxy', 'ApiDataConverter', function(taBaseProxy, apiDataConverter){
            var me = this,
                proxy;
            me.tickets = [];
            me.newTicketFromUi = {};
            proxy = new taBaseProxy('bingotickets');

            me.resetNewTicket = function () {
                me.newTicketFromUi = {
                    ticket:'',
                    gameid: 1
                };
            };

            me.getCurrentTickets = function () {
                proxy.get(apiDataConverter.getJson)
                    .then(function (data) {
                       me.tickets = data;
                    })
                    .catch(function (response) {
                        alert("There was a problem getting tickets: " + response);
                    });
            };

            me.addTicket = function () {
                proxy.add(me.newTicketFromUi)
                    .then(function () {
                        me.getCurrentTickets();
                        me.resetNewTicket();
                    })
                    .catch(function (response) {
                        alert("There was a problem adding ticket: " + response);
                    });
            };

            me.updateTicket = function(ticket){
                proxy.update(ticket.id, ticket)
                    .then(function(){
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        alert("There was a problem updating ticket: " + response);
                    });
            };

            me.removeTicket = function(id){
                proxy.remove(id)
                    .then(function(){
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        alert("There was a problem deleting ticket: " + response);
                    });
            };
        }]);
})();