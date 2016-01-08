(function () {
    'use strict';


    angular.module('Tombola.Academy.Dash.WaitingPulls')
        .controller('WaitingPullsController', ['$scope', 'WaitingPullsPoller', function ($scope, waitingPullsPoller) {
            $scope.model = waitingPullsPoller.waitingPullsModel;
        }]);
})();