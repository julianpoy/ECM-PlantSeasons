angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
    $scope.menuItems = [
        { title: "Home", url: "#/app/home" }
    ];
})

.controller('HomeCtrl', function($scope) {
})

.controller('ToolsCtrl', function($scope) {

    $scope.plants = getCookie('plantData');

    $scope.doThang = function(){

        var file = document.getElementById('file').files[0];

        var reader = new FileReader();
        reader.onload = function(progressEvent){


            var plants = [];
            if(getCookie('plantData')){
                console.log("Reading job");
                console.log(JSON.parse(getCookie('plantData')));
                plants = JSON.parse(getCookie('plantData'));
            }
            var month = document.getElementById("month").value;
            // By lines
            var lines = this.result.split('\n');
            for(var line = 0; line < lines.length; line++){
                lines[line]
                plantIndex = -1;
                for(var i = 0; i < plants.length; i++){
                  if(plants[i].name == lines[line]){
                      plantIndex = i;
                      break;
                  }
                }
                if(plantIndex == -1){
                    var temp = { name: lines[line], primeMonths: [] }
                    temp.primeMonths.push(month);
                    plants.push(temp);
                } else {
                    var containsMonth = false;
                    for(var j = 0; j < plants[plantIndex].primeMonths.length; j++){
                        if(month == plants[plantIndex].primeMonths[j]){
                            containsMonth = true;
                        }
                    }
                    if(!containsMonth){
                        plants[plantIndex].primeMonths.push(month);
                    }
                }

            }
            console.log("Saving job");
            console.log(plants);
            if(month == "delete"){
                plants = [];
                console.log("deleting");
            }
            createCookie('plantData', JSON.stringify(plants));
        };
        reader.readAsText(file);
    };

    var createCookie = function(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) {
                    c_end = document.cookie.length;
                }
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
