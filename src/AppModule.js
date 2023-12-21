var app = angular.module('angularFeastApp', []);
app.run(function ($rootScope) {
    $rootScope.username = "Brian";
    $rootScope.quickColors = ['aqua', 'lightBlue', 'burlywood', 'royalblue', 'chocolate', 'crimson', 'darkgoldenrod', 'darkolivegreen',
        'coral', 'darkorchid', 'fuchsia', 'bisque', 'lightGreen', 'orange',]
    $rootScope.favColor = $rootScope.quickColors[Math.floor(Math.random() * $rootScope.quickColors.length)];
    $rootScope.updateFavColor = function (color) {
        $rootScope.favColor = color
        $rootScope.colorFilter = ''
    }
})