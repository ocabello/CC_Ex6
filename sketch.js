//var json;
var APIkey = "&api-key=72c17cbc6ade401a8b2a6a143be9e219";
var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
var query = "?critics-pick=Y&opening-date=2016-11-01;2016-11-30";


function setup() {
  loadJSON(url + query + APIkey, getData);
  createCanvas(500, 500);
  background(200, 215, 150);

}

function getData(data) {
  //var movies = data.results[0].display_title;
  var movies = data.results;
  //console.log(movies);
  //var titles = [];

  for (var i = 0; i < movies.length; i++) {
    movies[i].display_title;
    console.log(movies[i].display_title);
    // titles.push(movies[i].display_title);
    fill(0);
    text(movies[i].display_title, random(width), random(height));
  }

}