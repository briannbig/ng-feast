app.controller('angularFeastController', function ($scope) {
    $scope.name = "Brian";
    $scope.number = 3;
    $scope.favColor = "lightGreen";
    $scope.quickColors = ['aqua', 'lightBlue', 'burlywood', 'royalblue', 'chocolate', 'crimson', 'darkgoldenrod', 'darkolivegreen',
        'coral', 'darkorchid', 'fuchsia', 'bisque', 'lightGreen', 'orange',]
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