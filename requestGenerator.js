const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const method = 'GET';
const baseURL = 'https://swapi.co/api/';

exports.generateRequest = function(endpoint) {
  return new Promise(function(resolve, reject) {
     const xhr = new XMLHttpRequest();
     xhr.open(method, baseURL + endpoint, true);
     xhr.send();
     xhr.onerror = function() {
       reject();
     }
     xhr.onload = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
         resolve(xhr.responseText);
       } else {
         reject();
       }
     }
   });
}
