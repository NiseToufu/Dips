// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'yulpApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('yulpApp', ['ionic'])
.run(function ($ionicPlatform) {
 $ionicPlatform.ready(function () {
 if(window.cordova && window.cordova.plugins.Keyboard) {
 // Hide the accessory bar by default (remove this to show the accessory bar abovethe keyboard
 // for form inputs)
 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
 // Don't remove this line unless you know what you are doing. It stops the viewport
 // from snapping when text inputs are focused. Ionic handles this internally for
 // a much nicer keyboard experience.
 cordova.plugins.Keyboard.disableScroll(true);
 }
 if(window.StatusBar) {
 StatusBar.styleDefault();
 }
 });
})
.config(function ($stateProvider, $urlRouterProvider) {
 $stateProvider
 .state('home', {
 url: '/home',
 templateUrl: 'views/home/home.html',
 abstract: true
 })

 .state('home.homePage', {
 url: '/homePage',
 views: {
 'tab-homePage': {
 templateUrl: 'views/home/homePage.html'
 }
 }
 })

 .state('home.navigate', {
 url: '/navigate',
 views: {
 'tab-navigate': {
 templateUrl: 'views/home/navigate.html'
 }
 }
 })

  .state('home.navigate2', {
 url: '/navigate2',
 views: {
 'tab-navigate': {
 templateUrl: 'views/home/navigate2.html'
 }
 }
 })

 .state('home.settings', {
 url: '/settings',
 views: {
 'tab-settings': {
 templateUrl: 'views/home/settings.html'
 }
 }
 })

 .state('home.report', {
 url: '/report',
 views: {
 'tab-report': {
 templateUrl: 'views/home/report.html'
 }
 }
 })

 ;


 // if none of the above states are matched, use this as the fallback
 $urlRouterProvider.otherwise('/home/homePage');
});