 function addListeners() {
     var ul = document.getElementById("navigation");
     var li = ul.getElementsByTagName("li");
     li[0].classList.add("active");
     for (var i = 0; i < li.length; i++) {
         li[i].addEventListener("click", function () {
             removeActiveClass();
             this.classList.add("active");
         });
     }

     function removeActiveClass() {
         for (var i = 0; i < li.length; i++) {
             li[i].classList.remove("active");
         }
     }
 }

 function changeTab() {
     var ul = document.getElementById("navigation");
     var li = ul.getElementsByTagName("li");
     removeActiveClass();
     li[0].classList.add("active");

     function removeActiveClass() {
         for (var i = 0; i < li.length; i++) {
             li[i].classList.remove("active");
         }
     }
 }

 function callForAccodian() {
     var acc = document.getElementsByClassName("accordion");
     var i;
     for (i = 0; i < acc.length; i++) {
         acc[i].onclick = function () {
             this.classList.toggle("active");
             var panel = this.nextElementSibling;
             if (panel.style.display === "block") {
                 panel.style.display = "none";
             }
             else {
                 panel.style.display = "block";
             }
         }
     }
 }

 function callForWindowResize() {
     $(window).on('resize', function () {
         var win = $(this);
         if (win.width() > 747) {
             $('#panel1').removeClass('col-xs-12 remove_padding');
             $('#panel2').removeClass('col-xs-12 remove_padding');
             $('#panel1').addClass('col-xs-6 remove_padding_left');
             $('#panel2').addClass('col-xs-6 remove_padding_right');
         }
         else {
             $('#panel1').removeClass('col-xs-6 remove_padding_left');
             $('#panel2').removeClass('col-xs-6 remove_padding_right');
             $('#panel1').addClass('col-xs-12 remove_padding');
             $('#panel2').addClass('col-xs-12 remove_padding');
         }
     });
 }

 function makeVisibilityDisplay() {
     //document.getElementById("details_container").style.display = 'block';
 }

 function makeContainerVisible() {
     document.getElementById("the_progress_bar_container").style.display = 'none';
     document.getElementById("the_container").style.display = 'block';
 }

 function makeContainerInvisible() {
     document.getElementById("the_container").style.display = 'none';
     // document.getElementById("the_progress_bar_container").style.visibility = "visible";
 }

 function makeProgressBarVisible() {
     document.getElementById("the_container").style.display = 'none';
     document.getElementById("the_progress_bar_container").style.display = 'block';
 }

 function makeProgressBarInvisible() {
     document.getElementById("the_progress_bar_container").style.display = 'none';
 }

 function makeClear() {
     document.getElementById("the_container").style.display = 'none';
     document.getElementById("the_progress_bar_container").style.display = 'none';
     document.getElementById("txt_search").value = "";
     changeTab();
 }

 function setCustomMessage() {
     var text_search = document.getElementById('txt_search');
     if (text_search.value) {
         if (text_search.value.length == 0) {
             text_search.setCustomValidity("Please type a keyword");
         }
         else {
             text_search.setCustomValidity("");
         }
     }
     else {
         text_search.setCustomValidity("Please type a keyword");
     }
 }

 function removeCustomMessage() {
     var text_search = document.getElementById('txt_search');
     if (text_search.value) {
         text_search.setCustomValidity("");
     }
 }
 var crd;
 var options = {
     enableHighAccuracy: true
     , timeout: 5000
     , maximumAge: 0
 };

 function success(pos) {
     crd = pos.coords;
 };

 function error(err) {
     //  console.warn(`ERROR(${err.code}): ${err.message}`);
 };
 navigator.geolocation.getCurrentPosition(success, error, options);
 var app = angular.module('myApp', ["ngAnimate"]);
 app.controller('myCtrl', function ($scope, $http) {
     $scope.users = true;
     $scope.pages = false;
     $scope.events = false;
     $scope.places = false;
     $scope.groups = false;
     $scope.favorites = false;
     $scope.users_error = false;
     $scope.pages_error = false;
     $scope.events_error = false;
     $scope.places_error = false;
     $scope.groups_error = false;
     $scope.favorites_error = false;
     $scope.users_next = "";
     $scope.pages_next = "";
     $scope.events_next = "";
     $scope.places_next = "";
     $scope.groups_next = "";
     $scope.users_prev = "";
     $scope.pages_prev = "";
     $scope.events_prev = "";
     $scope.places_prev = "";
     $scope.groups_prev = "";
     $scope.is_users_next_present = false;
     $scope.is_pages_next_present = false;
     $scope.is_events_next_present = false;
     $scope.is_places_next_present = false;
     $scope.is_groups_next_present = false;
     $scope.is_users_prev_present = false;
     $scope.is_pages_prev_present = false;
     $scope.is_events_prev_present = false;
     $scope.is_places_prev_present = false;
     $scope.is_groups_prev_present = false;
     $scope.is_submit_pressed = false;
     $scope.selected_tab = "users";
     $scope.details = false;
     $scope.details1 = true;
     $scope.albums_progress_bar_show = true;
     $scope.posts_progress_bar_show = true;
     $scope.albums_error_show = false;
     $scope.posts_error_show = false;
     $scope.Url_of_the_Picture = "";
     $scope.Name_of_the_Object = "";
     $scope.getClassPanel1 = function () {
         var win = $(this);
         if ($(window).width() > 747) {
             return 'col-xs-6 remove_padding_left';
         }
         else {
             return 'col-xs-12 remove_padding';
         }
     }
     $scope.getClassPanel2 = function () {
         // var win = $(this);
         if ($(window).width() > 747) {
             return 'col-xs-6 remove_padding_right';
         }
         else {
             return 'col-xs-12 remove_padding';
         }
     }
     $scope.goToNextPage = function (id, name, link, imageUrl, type) {
         $scope.details = true;
         $scope.details1 = false;
         $scope.detail_id = id;
         $scope.detail_name = name;
         if (link) {
             $scope.detail_link = link;
         }
         else {
             //$scope.detail_link = "http://adarsh.us-west-2.elasticbeanstalk.com/index/index.html";
             $scope.detail_link = "";
         }
         $scope.detail_imageUrl = imageUrl;
         $scope.detail_type = type;
         $scope.getDetails(id);
         document.getElementById("details_container").style.display = 'block';
     }
     $scope.goToMainPage = function () {
             $scope.details = false;
             $scope.details1 = true;
             //clean up all the details page stuff, so that its not visible when we go there second time
             $scope.detail_id = "";
             $scope.detail_name = "";
             $scope.detail_link = "";
             $scope.detail_imageUrl = "";
             $scope.detail_type = "";
             $scope.detail_albums_response = "";
             $scope.detail_posts_response = "";
             $scope.albums_progress_bar_show = true;
             $scope.posts_progress_bar_show = true;
             $scope.albums_error_show = false;
             $scope.posts_error_show = false;
             if ($scope.selected_tab == "favorites") {
                 $scope.getFavoriteItems();
             }
         }
         /* $scope.postToFaceBook = function () {
              FB.ui({
                  method: 'share'
                  , display: 'popup'
                  , href: $scope.detail_link
                  , caption: 'FB SEARCH FROM USC CSCI571'
              , }, function (response) {
                  if (response) {
                      alert('Posted Successfully');
                  }
                  else {
                      alert('Not Posted')
                  }
              });
          }*/
     $scope.postToFaceBook = function () {
         if ($scope.Url_of_the_Picture && $scope.Name_of_the_Object) {
             FB.ui({
                 method: 'feed'
                 , link: window.location.href
                 , picture: $scope.Url_of_the_Picture
                 , name: $scope.Name_of_the_Object
                 , caption: 'FB SEARCH FROM USC CSCI571'
             , }, function (response) {
                 if (response && !response.error_message) {
                     alert('Posted Successfully');
                 }
                 else {
                     alert('Not Posted')
                 }
             });
         }
         else if ($scope.detail_link) {
             FB.ui({
                 method: 'share'
                 , href: $scope.detail_link
                 , caption: 'FB SEARCH FROM USC CSCI571'
             , }, function (response) {
                 if (response) {
                     alert('Posted Successfully');
                 }
                 else {
                     alert('Not Posted')
                 }
             });
         }
         else {
             FB.ui({
                 method: 'share'
                 , href: window.location.href
                 , caption: 'FB SEARCH FROM USC CSCI571'
             , }, function (response) {
                 if (response) {
                     alert('Posted Successfully');
                 }
                 else {
                     alert('Not Posted')
                 }
             });
         }
     }
     $scope.getDetails = function (id) {
         $scope.Url_of_the_Picture = "";
         $scope.Name_of_the_Object = "";
         $http({
             method: "GET"
             , url: "search_aws.php?details=true" + "&id=" + id
         }).then(function mySucces(response) {
             if (response['data'] && response['data']['name']) {
                 $scope.Name_of_the_Object = response['data']['name'];
             }
             if (response['data'] && response['data']['picture'] && response['data']['picture']['data'] && response['data']['picture']['data']['url']) {
                 $scope.Url_of_the_Picture = response['data']['picture']['data']['url'];
             }
             if (response['data'] && response['data']['albums']) {
                 if (response['data']['albums']['data']) {
                     the_right_response = [];
                     isAlbumFound = false;
                     //$scope.detail_albums_response = [];
                     for (album in response['data']['albums']['data']) {
                         //here we get album name
                         isAlbumFound = true;
                         var myObject = response['data']['albums']['data'][album];
                         var jsonDataFull = {};
                         name = "";
                         if (myObject['name']) {
                             name = myObject['name'];
                         }
                         jsonDataFull['name'] = name;
                         var pictureArray = [];
                         if (myObject['photos'] && myObject['photos']['data']) {
                             var photoObjects = myObject['photos']['data'];
                             for (photos in photoObjects) {
                                 if (photoObjects[photos]) {
                                     //pictureUrl = $scope.getHighResolutionUrl(photoObjects[photos]['id']);
                                     pictureUrl = "";
                                     if (photoObjects[photos]['images'] && photoObjects[photos]['images'][0] && photoObjects[photos]['images'][0]['source']) {
                                         pictureUrl = photoObjects[photos]['images'][0]['source'];
                                     }
                                     if (pictureUrl) {
                                         pictureArray.push(pictureUrl);
                                     }
                                 }
                             }
                         }
                         jsonDataFull['pictures'] = pictureArray;
                         the_right_response.push(jsonDataFull);
                     }
                     if (isAlbumFound == false) {
                         //No albums found
                         $scope.albums_error_show = true;
                     }
                     $scope.albums_progress_bar_show = false;
                     $scope.detail_albums_response = the_right_response;
                 }
                 else {
                     //No albums found
                     $scope.albums_progress_bar_show = false;
                     $scope.albums_error_show = true;
                 }
             }
             else {
                 //No albums found
                 $scope.albums_progress_bar_show = false;
                 $scope.albums_error_show = true;
             }
             //this is for posts
             if (response['data'] && response['data']['posts']) {
                 the_right_response_posts = [];
                 //lets take the name and Url
                 var fullName = "";
                 var fullUrl = "";
                 var isPostsFound = false;
                 if (response['data']['name']) {
                     fullName = response['data']['name'];
                 }
                 if (response['data']['picture'] && response['data']['picture']['data'] && response['data']['picture']['data']['url']) {
                     fullUrl = response['data']['picture']['data']['url'];
                 }
                 if (response['data']['posts']['data']) {
                     for (post in response['data']['posts']['data']) {
                         isPostsFound = true;
                         var myObject = response['data']['posts']['data'][post];
                         var jsonDataFull = {};
                         jsonDataFull['name'] = fullName;
                         jsonDataFull['url'] = fullUrl;
                         message = "";
                         if (myObject['message']) {
                             message = myObject['message'];
                         }
                         else if (myObject['story']) {
                             message = myObject['story'];
                         }
                         jsonDataFull['post'] = message;
                         var createdTime = "";
                         if (myObject['created_time']) {
                             createdTime = moment(myObject['created_time']).format("YYYY-MM-DD HH:mm:ss");
                         }
                         jsonDataFull['time'] = createdTime;
                         the_right_response_posts.push(jsonDataFull);
                     }
                     if (isPostsFound == false) {
                         $scope.posts_error_show = true;
                     }
                     $scope.detail_posts_response = the_right_response_posts;
                     $scope.posts_progress_bar_show = false;
                 }
                 else {
                     //No posts found 
                     $scope.posts_progress_bar_show = false;
                     $scope.posts_error_show = true;
                 }
             }
             else {
                 //No posts found 
                 $scope.posts_progress_bar_show = false;
                 $scope.posts_error_show = true;
             }
         }, function myError(response) {
             $scope.myResponse = "Error";
         });
     }
     $scope.circle_style = {
         'border-radius': '50px'
     }
     $scope.cleanUpNextPrev = function () {
         $scope.users_next = "";
         $scope.pages_next = "";
         $scope.events_next = "";
         $scope.places_next = "";
         $scope.groups_next = "";
         $scope.users_prev = "";
         $scope.pages_prev = "";
         $scope.events_prev = "";
         $scope.places_prev = "";
         $scope.groups_prev = "";
         $scope.is_users_next_present = false;
         $scope.is_pages_next_present = false;
         $scope.is_events_next_present = false;
         $scope.is_places_next_present = false;
         $scope.is_groups_next_present = false;
         $scope.is_users_prev_present = false;
         $scope.is_pages_prev_present = false;
         $scope.is_events_prev_present = false;
         $scope.is_places_prev_present = false;
         $scope.is_groups_prev_present = false;
     }
     $scope.selectTab = function (selectedTab) {
         /*if ($scope.details == true) { adarsh
             $scope.is_submit_pressed = false;
             $scope.clearAll();
         }*/
         $scope.goToMainPage();
         $scope.selected_tab = selectedTab;
         if (selectedTab == "users") {
             if ($scope.is_submit_pressed) {
                 $scope.users = true;
                 makeContainerVisible();
             }
         }
         else {
             $scope.users = false;
         }
         if (selectedTab == "pages") {
             if ($scope.is_submit_pressed) {
                 $scope.pages = true;
                 makeContainerVisible();
             }
         }
         else {
             $scope.pages = false;
         }
         if (selectedTab == "events") {
             if ($scope.is_submit_pressed) {
                 $scope.events = true;
                 makeContainerVisible();
             }
         }
         else {
             $scope.events = false;
         }
         if (selectedTab == "places") {
             if ($scope.is_submit_pressed) {
                 $scope.places = true;
                 makeContainerVisible();
             }
         }
         else {
             $scope.places = false;
         }
         if (selectedTab == "groups") {
             if ($scope.is_submit_pressed) {
                 $scope.groups = true;
                 makeContainerVisible();
             }
         }
         else {
             $scope.groups = false;
         }
         if (selectedTab == "favorites") {
             $scope.getFavoriteItems();
             makeContainerVisible();
         }
         else {
             $scope.favorites = false;
         }
     }
     $scope.getFavoriteItems = function () {
         var favourite_found_now = false;
         $scope.myResponseFavorites = [];
         for (var key in localStorage) {
             if (key.includes("adarsh")) {
                 favourite_found_now = true;
                 $scope.myResponseFavorites.push(JSON.parse(localStorage.getItem(key)));
             }
         }
         if (favourite_found_now == true) {
             $scope.favorites_error = false;
         }
         else {
             $scope.favorites_error = true;
         }
         $scope.favorites = true;
     }
     $scope.getClassPanel = function (id) {
         if (id == 0) {
             return "panel-collapse collapse in";
         }
         else {
             return "panel-collapse collapse";
         }
     }
     $scope.getClass = function (id) {
         var theYellowStarClass = "glyphicon glyphicon-star";
         var theStarClass = "glyphicon glyphicon-star-empty";
         var myNewId = 'adarsh-' + id;
         found = false;
         for (var key in localStorage) {
             if (myNewId == key) {
                 //console.log(key);
                 found = true;
                 break;
             }
         }
         if (found) {
             return theYellowStarClass;
         }
         else {
             return theStarClass;
         }
     }
     $scope.changeClassClick = function (id, name, link, imageUrl, type) {
         var myNewId = 'adarsh-' + id;
         var theYellowStarClass = "glyphicon glyphicon-star";
         var theStarClass = "glyphicon glyphicon-star-empty";
         var favoriteObject = {
             id: id
             , name: name
             , link: link
             , imageUrl: imageUrl
             , type: type
         };
         found = false;
         for (var key in localStorage) {
             if (key == myNewId) {
                 found = true;
                 break;
             }
         }
         if (found) {
             document.getElementById(id).className = theStarClass;
             localStorage.removeItem(myNewId);
         }
         else {
             document.getElementById(id).className = theYellowStarClass;
             localStorage.setItem(myNewId, JSON.stringify(favoriteObject));
         }
     }
     $scope.changeClassClickDetails = function (id, name, link, imageUrl, type) {
         var myNewId = 'adarsh-' + id;
         var theYellowStarClass = "glyphicon glyphicon-star";
         var theStarClass = "glyphicon glyphicon-star-empty";
         var favoriteObject = {
             id: id
             , name: name
             , link: link
             , imageUrl: imageUrl
             , type: type
         };
         found = false;
         for (var key in localStorage) {
             if (key == myNewId) {
                 found = true;
                 break;
             }
         }
         if (found) {
             document.getElementById('detailsStar').className = theStarClass;
             localStorage.removeItem(myNewId);
         }
         else {
             document.getElementById('detailsStar').className = theYellowStarClass;
             localStorage.setItem(myNewId, JSON.stringify(favoriteObject));
         }
     }
     $scope.deleteClick = function (id) {
         localStorage.removeItem('adarsh-' + id);
         $scope.getFavoriteItems();
     }
     $scope.clearAll = function () {
         $scope.searchValue = "";
         $scope.is_submit_pressed = false;
         $scope.selected_tab = "users";
         $scope.goToMainPage();
         setCustomMessage();
         // $('#usersTab').tab('show');
     }
     $scope.search = function () {
         if ($scope.searchValue) {
             $scope.goToMainPage();
             $scope.is_submit_pressed = true;
             $scope.cleanUpNextPrev();
             if ($scope.selected_tab) {
                 $scope.selectTab($scope.selected_tab);
             }
             makeProgressBarVisible();
             $scope.searchUser('fromSearch');
             $scope.searchPages('fromSearch');
             $scope.searchEvents('fromSearch');
             $scope.searchPlaces('fromSearch');
             $scope.searchGroups('fromSearch');
             //setCustomMessage();
         }
         else {
             /*show user a message to input data alert*/
             makeProgressBarInvisible();
             setCustomMessage();
         }
     }
     $scope.callNextUser = function () {
         makeProgressBarVisible();
         $scope.searchUser('fromNext');
     }
     $scope.callPreviousUser = function () {
         makeProgressBarVisible();
         $scope.searchUser('fromPrev');
     }
     $scope.callNextPage = function () {
         makeProgressBarVisible();
         $scope.searchPages('fromNext');
     }
     $scope.callPreviousPage = function () {
         makeProgressBarVisible();
         $scope.searchPages('fromPrev');
     }
     $scope.callNextEvent = function () {
         makeProgressBarVisible();
         $scope.searchEvents('fromNext');
     }
     $scope.callPreviousEvent = function () {
         makeProgressBarVisible();
         $scope.searchEvents('fromPrev');
     }
     $scope.callNextPlace = function () {
         makeProgressBarVisible();
         $scope.searchPlaces('fromNext');
     }
     $scope.callPreviousPlace = function () {
         makeProgressBarVisible();
         $scope.searchPlaces('fromPrev');
     }
     $scope.callNextGroups = function () {
         makeProgressBarVisible();
         $scope.searchGroups('fromNext');
     }
     $scope.callPreviousGroups = function () {
         makeProgressBarVisible();
         $scope.searchGroups('fromPrev');
     }
     $scope.searchUser = function (fromPlace) {
         if (fromPlace === 'fromSearch') {
             mUrl = "search_aws.php?search_query=" + $scope.searchValue + "&type=User"
         }
         else if (fromPlace === 'fromNext') {
             //mUrl = $scope.users_next;
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.users_next);
         }
         else {
             //mUrl = $scope.users_prev;
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.users_prev);
         }
         $http({
             method: "GET"
             , url: mUrl
         }).then(function mySucces(response) {
             if (response['data'] && response['data']['data']) {
                 var check = response['data']['data'];
                 if (check.length == 0) {
                     $scope.users_error = true;
                 }
                 else {
                     $scope.users_error = false;
                 }
                 $scope.myResponse = response['data']['data'];
                 //get next and previous and reset the scopes as required
                 if (response['data']['paging']) {
                     if (response['data']['paging']['next']) {
                         $scope.users_next = response['data']['paging']['next'];
                         $scope.is_users_next_present = true;
                     }
                     else {
                         $scope.users_next = "";
                         $scope.is_users_next_present = false;
                     }
                     if (response['data']['paging']['previous']) {
                         $scope.users_prev = response['data']['paging']['previous'];
                         $scope.is_users_prev_present = true;
                     }
                     else {
                         $scope.users_prev = "";
                         $scope.is_users_prev_present = false;
                     }
                 }
                 else {
                     $scope.users_next = "";
                     $scope.users_prev = "";
                     $scope.is_users_next_present = false;
                     $scope.is_users_prev_present = false;
                 }
             }
             else {
                 $scope.users_error = true;
                 // makeProgressBarInvisible();
             }
             if ($scope.selected_tab == "users" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
         }, function myError(response) {
             // $scope.myResponse = "Error";
             if ($scope.selected_tab == "users" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
             $scope.users_error = true;
             // makeProgressBarInvisible();
         });
     }
     $scope.searchPages = function (fromPlace) {
         if (fromPlace === 'fromSearch') {
             mUrl = "search_aws.php?search_query=" + $scope.searchValue + "&type=page"
         }
         else if (fromPlace === 'fromNext') {
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.pages_next);
         }
         else {
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.pages_prev);
         }
         $http({
             method: "GET"
             , url: mUrl
         }).then(function mySucces(response) {
             if (response['data'] && response['data']['data']) {
                 var check = response['data']['data'];
                 if (check.length == 0) {
                     $scope.pages_error = true;
                 }
                 else {
                     $scope.pages_error = false;
                 }
                 $scope.myResponsePages = response['data']['data'];
                 //get next and previous and reset the scopes as required
                 if (response['data']['paging']) {
                     if (response['data']['paging']['next']) {
                         $scope.pages_next = response['data']['paging']['next'];
                         $scope.is_pages_next_present = true;
                     }
                     else {
                         $scope.pages_next = "";
                         $scope.is_pages_next_present = false;
                     }
                     if (response['data']['paging']['previous']) {
                         $scope.pages_prev = response['data']['paging']['previous'];
                         $scope.is_pages_prev_present = true;
                     }
                     else {
                         $scope.pages_prev = "";
                         $scope.is_pages_prev_present = false;
                     }
                 }
                 else {
                     $scope.pages_next = "";
                     $scope.pages_prev = "";
                     $scope.is_pages_next_present = false;
                     $scope.is_pages_prev_present = false;
                 }
             }
             else {
                 $scope.pages_error = true;
                 // makeProgressBarInvisible();
             }
             if ($scope.selected_tab == "pages" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
         }, function myError(response) {
             //$scope.myResponsePages = "Error";
             $scope.pages_error = true;
             // makeProgressBarInvisible();
             if ($scope.selected_tab == "pages" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
         });
     }
     $scope.searchEvents = function (fromPlace) {
         if (fromPlace === 'fromSearch') {
             mUrl = "search_aws.php?search_query=" + $scope.searchValue + "&type=event"
         }
         else if (fromPlace === 'fromNext') {
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.events_next);
         }
         else {
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.events_prev);
         }
         $http({
             method: "GET"
             , url: mUrl
         }).then(function mySucces(response) {
             if (response['data'] && response['data']['data']) {
                 var check = response['data']['data'];
                 if (check.length == 0) {
                     $scope.events_error = true;
                 }
                 else {
                     $scope.events_error = false;
                 }
                 $scope.myResponseEvents = response['data']['data'];
                 //get next and previous and reset the scopes as required
                 if (response['data']['paging']) {
                     if (response['data']['paging']['next']) {
                         $scope.events_next = response['data']['paging']['next'];
                         $scope.is_events_next_present = true;
                     }
                     else {
                         $scope.events_next = "";
                         $scope.is_events_next_present = false;
                     }
                     if (response['data']['paging']['previous']) {
                         $scope.events_prev = response['data']['paging']['previous'];
                         $scope.is_events_prev_present = true;
                     }
                     else {
                         $scope.events_prev = "";
                         $scope.is_events_prev_present = false;
                     }
                 }
                 else {
                     $scope.events_next = "";
                     $scope.events_prev = "";
                     $scope.is_events_next_present = false;
                     $scope.is_events_prev_present = false;
                 }
             }
             else {
                 $scope.events_error = true;
                 //makeProgressBarInvisible();
             }
             if ($scope.selected_tab == "events" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
         }, function myError(response) {
             //$scope.myResponseEvents = "Error";
             if ($scope.selected_tab == "events" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
             $scope.events_error = true;
             //makeProgressBarInvisible();
         });
     }
     $scope.searchPlaces = function (fromPlace) {
         if (fromPlace === 'fromSearch') {
             if (crd) {
                 mUrl = "search_aws.php?search_query=" + $scope.searchValue + "&type=place" + "&lat=" + crd.latitude + "&lng=" + crd.longitude;
             }
             else {
                 mUrl = "search_aws.php?search_query=" + $scope.searchValue + "&type=place";
             }
         }
         else if (fromPlace === 'fromNext') {
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.places_next);
         }
         else {
             mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.places_prev);
         }
         $http({
             method: "GET"
             , url: mUrl
         }).then(function mySucces(response) {
             if (response['data'] && response['data']['data']) {
                 var check = response['data']['data'];
                 if (check.length == 0) {
                     $scope.places_error = true;
                 }
                 else {
                     $scope.places_error = false;
                 }
                 $scope.myResponsePlaces = response['data']['data'];
                 //get next and previous and reset the scopes as required
                 if (response['data']['paging']) {
                     if (response['data']['paging']['next']) {
                         $scope.places_next = response['data']['paging']['next'];
                         $scope.is_places_next_present = true;
                     }
                     else {
                         $scope.places_next = "";
                         $scope.is_places_next_present = false;
                     }
                     if (response['data']['paging']['previous']) {
                         $scope.places_prev = response['data']['paging']['previous'];
                         $scope.is_places_prev_present = true;
                     }
                     else {
                         $scope.places_prev = "";
                         $scope.is_places_prev_present = false;
                     }
                 }
                 else {
                     $scope.places_next = "";
                     $scope.places_prev = "";
                     $scope.is_places_next_present = false;
                     $scope.is_places_prev_present = false;
                 }
             }
             else {
                 $scope.places_error = true;
                 // makeProgressBarInvisible();
             }
             if ($scope.selected_tab == "places" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
         }, function myError(response) {
             // $scope.myResponsePlaces = "Error";
             $scope.places_error = true;
             if ($scope.selected_tab == "places" || $scope.selected_tab == "favorites") {
                 makeContainerVisible();
             }
         });
     }
     $scope.searchGroups = function (fromPlace) {
             if (fromPlace === 'fromSearch') {
                 mUrl = "search_aws.php?search_query=" + $scope.searchValue + "&type=group"
             }
             else if (fromPlace === 'fromNext') {
                 mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.groups_next);
             }
             else {
                 mUrl = "search_aws.php?urlSearch=" + encodeURIComponent($scope.groups_prev);
             }
             $http({
                 method: "GET"
                 , url: mUrl
             }).then(function mySucces(response) {
                 if (response['data'] && response['data']['data']) {
                     var check = response['data']['data'];
                     if (check.length == 0) {
                         $scope.groups_error = true;
                     }
                     else {
                         $scope.groups_error = false;
                     }
                     $scope.myResponseGroups = response['data']['data'];
                     //get next and previous and reset the scopes as required
                     if (response['data']['paging']) {
                         if (response['data']['paging']['next']) {
                             $scope.groups_next = response['data']['paging']['next'];
                             $scope.is_groups_next_present = true;
                         }
                         else {
                             $scope.groups_next = "";
                             $scope.is_groups_next_present = false;
                         }
                         if (response['data']['paging']['previous']) {
                             $scope.groups_prev = response['data']['paging']['previous'];
                             $scope.is_groups_prev_present = true;
                         }
                         else {
                             $scope.groups_prev = "";
                             $scope.is_groups_prev_present = false;
                         }
                     }
                     else {
                         $scope.groups_next = "";
                         $scope.groups_prev = "";
                         $scope.is_groups_next_present = false;
                         $scope.is_groups_prev_present = false;
                     }
                 }
                 else {
                     $scope.groups_error = true;
                     //makeProgressBarInvisible();
                 }
                 // makeContainerVisible();
                 //makeProgressBarInvisible();
                 if ($scope.selected_tab == "groups" || $scope.selected_tab == "favorites") {
                     makeContainerVisible();
                 }
             }, function myError(response) {
                 // $scope.myResponseGroups = "Error";
                 $scope.groups_error = true;
                 if ($scope.selected_tab == "groups" || $scope.selected_tab == "favorites") {
                     makeContainerVisible();
                 }
                 // makeContainerVisible();
             });
         }
         /*---------------------------------------------------------------------*/
 });