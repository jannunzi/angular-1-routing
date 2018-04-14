(function() {
    angular
    .module('MovieApp')
    .controller("searchController", MovieSearchController);
    
    function MovieSearchController($location) {
        this.hello = "hello from MovieSearchController";
        this.search = search;
        
        function search(title) {
            // search for the movie from some API
            $location.url('/details/' + title);
        }
    }
})();