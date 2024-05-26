
var APP_URL = 'http://localhost:8080/'; // was /formio/
var API_URL = 'http://localhost:8080/';

// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

console.log(JSON.stringify(query));

var appUrl = query.appUrl || APP_URL;
var apiUrl = query.apiUrl || API_URL;

angular.module('formioApp').constant('AppConfig', {
  appUrl: appUrl,
  apiUrl: apiUrl,
  forms: {
    userForm: `${appUrl  }/user`,
    userLoginForm: `${appUrl  }/user/login`
  }
});
