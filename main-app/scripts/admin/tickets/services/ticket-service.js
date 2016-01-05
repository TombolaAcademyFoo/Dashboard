(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .service('TicketService', ['TaBaseProxy', 'ApiDataConverter', function(taBaseProxy, apiDataConverter){
            var me = this,
                proxy;
            me.tickets = [];
            me.newTicketFromUi = {};
            proxy = new taBaseProxy('bingotickets');

            //TODO add CRUD methods that talk to api proxy.

            me.resetNewTicket = function () {
                me.newTicketFromUi = {
                    ticket:'',
                    gameid: 1
                };
            };

            me.getCurrentTickets = function () {
                proxy.get(apiDataConverter.getJson)
                    .then(function (data) {
                        console.log(data);
                       me.tickets = data;
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.addTicket = function () {
                proxy.add(me.newTicketFromUi)
                    .then(function () {
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.updateTicket = function(id, update){
                proxy.update(id, update)
                    .then(function(){
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.removeTicket = function(id){
                proxy.remove(id)
                    .then(function(){
                        me.getCurrentTickets();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };
        }]);
})();