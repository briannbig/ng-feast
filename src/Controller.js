app.controller('angularFeastController', function ($scope) {
    $scope.name = "Brian";
    $scope.number = 3;

    $scope.quickColors = ['aqua', 'lightBlue', 'burlywood', 'royalblue', 'chocolate', 'crimson', 'darkgoldenrod', 'darkolivegreen',
        'coral', 'darkorchid', 'fuchsia', 'bisque', 'lightGreen', 'orange',]
    $scope.favColor = $scope.quickColors[Math.floor(Math.random() * $scope.quickColors.length)];
    $scope.updateFavColor = function (color) {
        $scope.favColor = color
        $scope.colorFilter = ''
    }
    $scope.showQuickColors = true;
    $scope.toggleButtonGroup = function () {
        $scope.showQuickColors = $scope.showQuickColors ? false : true
    }
    $scope.colorFilter = '';
});