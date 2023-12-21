var app = angular.module('angularFeastApp', []);

app.run(function ($rootScope) {
    $rootScope.quickColors = ['aqua', 'lightBlue', 'burlywood', 'royalblue', 'chocolate', 'crimson', 'darkgoldenrod', 'darkolivegreen',
        'coral', 'darkorchid', 'fuchsia', 'bisque', 'lightGreen', 'orange',]


    $rootScope.favColor = ''
    $rootScope.writeStorage = function (key, value) {
        localStorage.setItem(key, value)
        document.cookie = key + "=" + value;

    }

    const readStorage = function (key) {
        return localStorage.getItem(key)
    }

    $rootScope.user = { "username": readStorage('user.username'), "Age": 18, 'favColor': readStorage('user.favColor') };

    if (readStorage('user.favColor') === '') {
        $rootScope.favColor = $rootScope.quickColors[Math.floor(Math.random() * $rootScope.quickColors.length)];
    }
    else {
        $rootScope.favColor = readStorage('user.favColor')
    }

    $rootScope.updateFavColor = function (color) {
        $rootScope.writeStorage('user.favColor', color);
        $rootScope.favColor = readStorage('user.favColor')

    }

    $rootScope.updateUserName = function () {
        $rootScope.writeStorage('user.username', $rootScope.user.username);
        $rootScope.user.username = readStorage('user.username')
    }

})