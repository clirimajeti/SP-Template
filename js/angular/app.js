var app = angular.module('app', ['ngRoute','ui.bootstrap','ngTouch','ngAnimate']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '../../views/page1.html',
      controller: 'Ctrl'
    });
    $routeProvider.when('/1', {
      templateUrl: '../../views/page2.html',
      controller: 'Ctrl'
    });
    $routeProvider.when('/2', {
      templateUrl: '../../views/page3.html',
      controller: 'Ctrl'
    });
    $routeProvider.otherwise({redirectTo:'/'});
}]);

app.controller("Ctrl", ["$scope", function ($scope) {
  $scope.myInterval = 5000;
  var slides =  $scope.slides = [
      {
        title: "Fad",
        image: "./img/p1.png",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Fad",
        image:  "./img/p2.png",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Fad",
        image: "./img/p3.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Fad",
        image:  "./img/p4.png",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        title: "Fad",
        image:  "./img/p5.png",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit,esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
    ];

}]);
