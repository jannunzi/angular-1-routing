(function() {
    angular
    .module('MovieApp')
    .controller("detailsController", MovieDetailsController);
    
    function MovieDetailsController($routeParams) {
        console.log($routeParams);
        this.hello = "hello from MovieDetailsController";
        this.movieTitle = $routeParams.title;
    }
})();