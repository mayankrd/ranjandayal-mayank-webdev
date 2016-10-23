(function (){
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService)

    function WebsiteService(){

        var users =   [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];




        var api = {
            createWebsite: createWebsite,
            createWebsite: createWebsite,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            deleteWebsite: deleteWebsite
        };

        return api;

        function createWebsite(userId, website) {

        }

        function createWebsite(userId){

        }

        function findWebsiteById(websiteId) {

        }

        function updateWebsite(websiteId, website) {

        }

        function deleteWebsite(websiteId) {

        }
    }

})();