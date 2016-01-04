(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Tickets')
        .service('TicketService', [function(){
            var me = this;
            me.tickets = [];
            me.newTicket = {};

            //TODO add CRUD methods that talk to api proxy.
        }]);
})();