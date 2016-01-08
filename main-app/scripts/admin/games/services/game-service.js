(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.Games')
        .service('GameService', ['TaBaseProxy', 'ApiDataConverter', function(taBaseProxy, apiDataConverter){
            var me = this,
                proxy;
            me.games = [];
            me.newGameFromUi = {};
            proxy = new taBaseProxy('bingogames');

            me.resetNewGame = function () {
                me.newGameFromUi = {
                    ordertocall:''
                };
            };

            me.getCurrentGames = function () {
                proxy.get(apiDataConverter.getJson)
                    .then(function (data) {
                        me.games = data;
                    })
                    .catch(function (response) {
                        alert("There was a problem getting games: " + response);
                    });
            };

            me.addGame = function () {
                proxy.add(me.newGameFromUi)
                    .then(function () {
                        me.getCurrentGames();
                        me.resetNewGame();
                    })
                    .catch(function (response) {
                        alert("There was a problem adding game: " + response);
                    });
            };

            me.updateGame = function(ticket){
                proxy.update(ticket.id, ticket)
                    .then(function(){
                        me.getCurrentGames();
                    })
                    .catch(function (response) {
                        alert("There was a problem updating game: " + response);
                    });
            };

            me.removeGame = function(id){
                proxy.remove(id)
                    .then(function(){
                        me.getCurrentGames();
                    })
                    .catch(function (response) {
                        alert("There was a problem deleting game: " + response);
                    });
            };
        }]);
})();