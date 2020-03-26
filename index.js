const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const method = 'GET';
const baseURL = 'https://swapi.co/api/';
const firstEndpoint = 'species/2/';
const secondEndpoint = 'planets/2/';

let req1 = new Promise(function(resolve, reject){
   const xhr = new XMLHttpRequest();
   xhr.open(method, baseURL + firstEndpoint, true);
   xhr.send();
   xhr.onload = function() {
     if (xhr.responseText) {
       resolve(xhr.responseText);
     } else {
       reject();
     }
   }
 });
let req2 = new Promise(function(resolve, reject){
   const xhr = new XMLHttpRequest();
   xhr.open(method, baseURL + secondEndpoint, true);
   xhr.send();
   xhr.onerror = function() {
     console.log(xhr.status);
     console.log(xhr.statusText);
   }
   xhr.onload = function() {
     if (xhr.responseText) {
       resolve(xhr.responseText);
     } else {
       reject();
     }
   }
 });

let reqs = Promise.all([req1, req2])
 reqs.then(function(data) {
   console.log('data: ', data);
 }).catch(function(error){
   console.log('error: ', error);
 })
