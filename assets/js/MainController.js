app.controller('MainController', function($scope, $http) {
    $http.get("http://localhost/norv%C3%A9gia/api.php")
        .then(function(response) {
            console.log(response.data);
        });
});