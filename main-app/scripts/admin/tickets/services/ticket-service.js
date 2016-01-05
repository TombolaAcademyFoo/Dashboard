(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .service('TicketService', ['TaBaseProxy', 'ApiDataConverter', function(taBaseProxy, apiDataConverter){
            var me = this,
                proxy;
            me.tickets = [];
            me.newTicket = {};
            proxy = new taBaseProxy('bingotickets');

            //TODO add CRUD methods that talk to api proxy.

            me.resetNewTicket = function () {
                me.ticket = {
                  ticketString:''
                };
            };

            me.getCurrentTickets = function () {
                proxy.get(apiDataConverter.getJson)
                    .then(function (data) {
                       me.tickets = data;
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.addTicket = function (ticket) {
                taBaseProxy.add(ticket)
                    .then(function () {
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.updateTicket = function(id, update){
                taBaseProxy.update(id, update)
                    .then(function(){
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.removeTicket = function(ticket){
                taBaseProxy.remove(ticket.id)
                    .then(function(){
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };
        }]);
})();