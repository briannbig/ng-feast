app.controller('squareController', function ($scope) {
    $scope.number = Math.floor(Math.random() * 10)
    
})
app.controller('colorCardController', function ($scope, $rootScope) {
    $scope.showQuickColors = true;
    $scope.toggleButtonGroup = function () {
        $scope.showQuickColors = $scope.showQuickColors ? false : true
    }
    $scope.colorFilter = '';

    $scope.updateFavColor = function (color) {
        $rootScope.favColor = color
        $scope.colorFilter = ''
    }
});