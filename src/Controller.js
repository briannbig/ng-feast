app.controller('angularFeastController', function ($scope) {
    $scope.name = "Brian";
    $scope.number = 3;
    $scope.favColor = "lightGreen";
    $scope.quickColors = ['aqua', 'burlywood', 'coral', 'chocolate', 'crimson', 'darkgoldenrod', 'darkolivegreen',
        'darkorchid', 'fuchsia', 'lightBlue', 'lightGreen', 'royalblue', 'orange',]
    $scope.updateFavColor = function (color) {
        $scope.favColor = color
    }
    $scope.showQuickColors = false;
    $scope.toggleButtonGroup = function () {
        $scope.showQuickColors = $scope.showQuickColors ? false : true
    }
});