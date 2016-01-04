(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .service('TicketService', ['TaBaseProxy', function(taBaseProxy){
            var me = this;
            me.tickets = [];
            me.newTicket = {};

            //TODO add CRUD methods that talk to api proxy.

            me.resetNewTicket = function () {
                me.ticket = {
                  ticketString:''
                };
            };

            me.getCurrentTickets = function () {
                taBaseProxy('bingotickets').get()
                    .then(function (data) {
                       console.log(data);
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