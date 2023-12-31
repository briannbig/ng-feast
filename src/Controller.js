app.controller('colorCardController', function ($scope, $rootScope) {
    $scope.showQuickColors = true;
    $scope.showNameInput = $rootScope.user.username === '';

    $scope.colorFilter = '';

    $scope.toggleButtonGroup = function () {
        $scope.showQuickColors = $scope.showQuickColors ? false : true
    }

    $scope.toggleShowNameInput = function () {
        $scope.showNameInput = $scope.showNameInput ? false : true
    }

    $scope.updateFavColor = function (color) {
        $rootScope.updateFavColor(color)
        $scope.colorFilter = ''
    }
});

app.controller('todoController', function ($scope, $rootScope) {

    $scope.noteColor = $rootScope.favColor;
    $scope.todos = [
        { "text": "RSVP for event", "color": $rootScope.quickColors[7], "done": true },
        { "text": "Prepare for talk", "color": $rootScope.quickColors[9], "done": false }
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