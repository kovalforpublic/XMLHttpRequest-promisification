
const requestGenerator = require('./requestGenerator');
const firstEndpoint = 'species/3/';
const secondEndpoint = 'planets/3/';

const req1 = requestGenerator.generateRequest(firstEndpoint)
const req2 = requestGenerator.generateRequest(secondEndpoint);

const reqs = Promise.all([req1, req2])
 reqs.then(function(data) {
   console.log('data: ', data);
 }).catch(function(error) {
   console.log('error: ', error);
 })
