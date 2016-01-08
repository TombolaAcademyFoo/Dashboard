(function () {
    'use strict';

    angular.module('Tombola.Academy.Dash.WaitingPulls')
        .service('WaitingPullsPoller',['$interval', '$q', 'WaitingPullsModel', 'Nyan', function ($interval, $q, waitingPullsModel, nyan) {
            var intervalPromise,
                interval = 5 * 60 * 1000,
                endTime = _.now() + interval;

            var refresh = function () {
                var percentDone = 100 - ((endTime - _.now()) / interval * 100);
                if(percentDone < 100){
                    nyan.updatePercentage(percentDone);
                }
                else{
                    endTime = _.now() + interval;
                    nyan.updatePercentage(100);
                    waitingPullsModel.refresh()
                        .catch(function(message){
                            alert(message);
                        });
                }
            };

            return {
                waitingPullsModel: waitingPullsModel,
                startPolling: function () {
                    nyan.updatePercentage(0);
                    waitingPullsModel.refresh()
                        .then(function(){
                            intervalPromise = $interval(function () {
                                    refresh();
                                }, 10
                            );
                        })
                        .catch(function(message){
                            alert(message);
                        });
                },
                stopPolling:function(){
                    $interval.cancel(intervalPromise);
                    nyan.updatePercentage(0);
                    nyan.stop();
                }
            };
        }]);
})();
