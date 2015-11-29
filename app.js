'use strict';

angular
  .module('app', ["firebase"])
  .controller('mainCtrl', ["$scope", "$firebaseObject", "$firebaseArray", function($scope, $firebaseObject, $firebaseArray){
    var ref = new Firebase('https://rachelsbirthdaychat.firebaseio.com/');

    $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function(newMessage, author){
      if (!newMessage) return;
      $scope.messages.$add({
        text: newMessage,
        author: author || null
      })
    }

    $scope.messageLayout = function(length){
      if (length % 2){
        return true;
      }
      return false
    }
    $scope.greet = "hello"
  }])
