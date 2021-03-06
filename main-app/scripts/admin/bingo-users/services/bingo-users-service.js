(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash.Admin.BingoUsers')
        .service('BingoUserService', ['TaBingoUserProxy','ApiDataConverter', function(taBingoUserProxy, apiDataConverter){
            var me= this,
                updateCallback;
            me.bingoUsers = [];
            me.newUser = {};

            me.resetNewUser = function(){
                me.newUser = {
                    username:'',
                    password:'',
                    balance:''
                };
            };

            me.getCurrentUsers = function() {
                taBingoUserProxy.get(apiDataConverter.getJson)
                    .then(function (data) {
                        me.bingoUsers = data;
                        console.log(me.bingoUsers);
                        if(updateCallback){
                            updateCallback();
                        }
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.updateUser = function(id, update){
                taBingoUserProxy.update(id, update)
                    .then(function(){
                        me.getCurrentUsers();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.updateUsername = function(user){
                if(!user.username){
                    return;
                }
                me.updateUser(user.id, {username: user.username});
            };

            me.updatePassword = function(user){
                if(!user.password){
                    return;
                }
                me.updateUser(user.id, {username: user.password});
            };

            me.updateBalance = function(user){
                if(!user.balance){
                    return;
                }
                me.updateUser(user.id, {username: user.balance});
            };

            me.toggleInclude = function(user){
                me.updateUser(user.id, {includeinstats: !user.includeinstats[0]});
            };

            me.addUser = function(){
                taBingoUserProxy.add(me.newUser)
                    .then(function(){
                        me.resetNewUser();
                        me.getCurrentUsers();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.removeUser = function(user){
                taBingoUserProxy.remove(user.id)
                    .then(function(){
                        me.getCurrentUsers();
                    })
                    .catch(function (response) {
                        //TODO: visible error message.
                    });
            };

            me.setUpdateCallback = function(callback){
                updateCallback = callback;
            };

            me.resetNewUser();
        }]);
})();