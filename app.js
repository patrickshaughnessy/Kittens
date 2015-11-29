'use strict';

angular
  .module('app', ["firebase"])
  .controller('mainCtrl', ["$scope", "$firebaseObject", "$firebaseArray", "$sce", function($scope, $firebaseObject, $firebaseArray, $sce){
    var ref = new Firebase('https://rachelsbirthdaychat.firebaseio.com/');

    $scope.messages = $firebaseArray(ref);

    $scope.addMessage = function(newMessage, author){
      if (!newMessage) return;

      var payload = {};

      if (newMessage.slice(0,4) === "http"){
        payload.image = newMessage;
      } else if (newMessage.slice(0,1) === "<"){
        payload.pre = newMessage;
      } else {
        payload.text = newMessage;
      }
      payload.author = author || null;
      console.log(payload);
      $scope.messages.$add(payload)
      $scope.newMessage = "";
      $scope.author = "";
    }

    $scope.messageLayout = function(length){
      if (length % 2){
        return true;
      }
      return false
    }

    $scope.toTrustedHTML = function( html ){
      console.log('here', $sce.trustAsHtml( html ))
        return $sce.trustAsHtml( html );
    }

    $scope.greet = "hello"
  }])
