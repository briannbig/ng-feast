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

app.controller('todoController', function ($scope, $rootScope) {

    $scope.noteColor = $rootScope.favColor;
    $scope.todos = [
        { "text": "RSVP for event", "color": $rootScope.quickColors[4], "done": true },
        { "text": "Prepare for talk", "color": $rootScope.quickColors[5], "done": false }
    ]
    $scope.todoText = ''

    $scope.addTodo = function () {

        $scope.todos.push({
            "text": $scope.todoText,
            "color": $scope.noteColor,
            "done": false
        });
        $scope.todoText = ''
        $scope.noteColor = $rootScope.favColor;
    
}

    $scope.markDone = function (index) {
        $scope.todos[index].done = $scope.todos[index].done ? false : true
    }

    $scope.updateSelectedColor = function (color) {
        $scope.noteColor = color
    }

});