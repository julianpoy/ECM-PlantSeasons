// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  // Each tab has its own nav history stack:

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })

  .state('app.months', {
      url: '/month',
      views: {
        'menuContent': {
          templateUrl: 'templates/months.html',
          controller: 'MonthsCtrl'
        }
      }
    })

    .state('app.month', {
        url: '/month/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/month.html',
            controller: 'MonthCtrl'
          }
        }
      })

  .state('app.plants', {
    url: '/plant',
    views: {
      'menuContent': {
        templateUrl: 'templates/plants.html',
        controller: 'PlantsCtrl'
      }
    }
  })

  .state('app.plant', {
    url: '/plant/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/plant.html',
        controller: 'PlantCtrl'
      }
    }
  })

  .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  })

  .state('app.ecm', {
    url: '/ecm',
    views: {
      'menuContent': {
        templateUrl: 'templates/ecm.html'
      }
    }
  })

  .state('app.info', {
    url: '/info',
    views: {
      'menuContent': {
        templateUrl: 'templates/info.html'
      }
    }
  })

  .state('tools', {
    url: '/tools',
    templateUrl: 'templates/tools.html',
    controller: 'ToolsCtrl'
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

});
