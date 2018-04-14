(function(){
    angular
    .module('MovieApp', ['ngRoute'])
    .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when('/search', {
                templateUrl: 'templates/search/search.html',
                controller: 'searchController',
                controllerAs: 'model'
            })
            .when('/details', {
                templateUrl: 'templates/details/details.html',
                controller: 'detailsController',
                controllerAs: 'model'
            })
            .when('/details/:title', {
                templateUrl: 'templates/details/details.html',
                controller: 'detailsController',
                controllerAs: 'model'
            });
    }
})();