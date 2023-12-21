app.controller('squareController', function ($scope) {
    $scope.number = Math.floor(Math.random() * 10)
    
})
app.controller('colorCardController', function ($scope) {
    $scope.showQuickColors = true;
    $scope.toggleButtonGroup = function () {
        $scope.showQuickColors = $scope.showQuickColors ? false : true
    }
    $scope.colorFilter = '';
});