angular.module('Instanto')
    .config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('AuthInterceptor');
    }])

    .factory('AuthInterceptor', ['$q', '$location', 'ngToast',
                        function ($q,   $location,   ngToast) {

            return {
                'responseError': function(response) {
                    console.log(response);
                   if (response.status === 401) {
                    localStorage.removeItem("instanto_token");
                        console.error('Trying to access an unauthorized route.');
                        document.getElementById("page-wrapper").setAttribute("hidden", true);
                        document.getElementById("login-form").removeAttribute("hidden");
                    } else if (response.status === 400) {
                        console.error(response.data.reason);
                        ngToast.create({
                            content: response.data.field + ': ' + response.data.reason,
                            class: 'danger'
                        });
                    } else  if (response.status === 415) {
                        console.error('Error sending the request... Check the JSON!');
                    } else {
                       ngToast.create({
                            content: response.data,
                            class: 'danger'
                        }); 
                    }
                    return $q.reject(response);
                }
            };
    }]);
