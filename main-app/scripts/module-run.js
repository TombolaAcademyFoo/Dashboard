(function () {
    'use strict';
    angular.module('Tombola.Academy.Dash')
        .run(['$rootScope', '$state','TokenService', 'WaitingPullsPoller', function($rootScope, $state, tokenService, waitingPullsPoller){
            $rootScope.$on('$stateChangeStart', function(event, toState){
                //TODO: roles for admin
                //Note - no sense of roles, will lose where we were headed at login...
                if(!tokenService.isAuthenticated() && toState.name !== 'login'){
                    event.preventDefault();
                    $state.go('login');
                }
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
                if(toState.name === 'waitingPulls')
                {
                    waitingPullsPoller.startPolling();
                }
                else if(fromState.name === 'waitingPulls'){
                    waitingPullsPoller.stopPolling();
                }
                //if (toRoute.$$route.controller === 'WaitingPullsController') {
                //    console.log('Coming in');
                //    refresh();
                //}
                //else {
                //    console.log('leaving');
                //    $interval.cancel(intervalPromise);
                //}
            });
        }]);
})();