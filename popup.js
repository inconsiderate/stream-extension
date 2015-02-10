function addBookmark(bookmark) {
  "use strict";

  // this is where our data is GOING and shit via POST
  // this variable sets up an asynchronous AJAX POST request, son
  var postUrl = 'https://streamteamapp.herokuapp.com/links',
    xhr = new XMLHttpRequest(),
    data = '' + 'url=' + window.encodeURIComponent(bookmark.url) + '&title=' + window.encodeURIComponent(bookmark.title);
  
  xhr.open('POST', postUrl, true);

  // Set request header for form data 
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  // Send the request and set status
  xhr.send(data);
}

$(document).ready(function () {
  "use strict";
  var query = {
    active: true,
    currentWindow: true
  },
  statusDisplay = null;

  function callback(tabs) {
    var currentTab = tabs[0];
    alert(currentTab.title + "\n\nhas been added to your Stream!");
    addBookmark(currentTab);
  }
  chrome.tabs.query(query, callback);
});