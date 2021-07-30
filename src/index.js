console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4").then(function(resp) {
  return resp.json();
  .then(function(json){
});