(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.TaProxy')
        .service('TaBingoUserProxy', ['TaBaseProxy', function(TaBaseProxy){

            var proxy = new TaBaseProxy('fakebingousers');
            return {
                get: proxy.get,
                update: proxy.update,
                add: proxy.add,
                remove: proxy.remove
            };
        }]);
})();