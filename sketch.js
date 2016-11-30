var APIkey = "&api-key=72c17cbc6ade401a8b2a6a143be9e219"; 
var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";   //NYT moview reviews api
var query = "?critics-pick=Y&opening-date=2016-11-01;2016-11-30";        //searched for the movies that came out this
                                                                         //this month and had good critic reviews

var data;

var visual = [];

function preload() {
  data = loadJSON(url + query + APIkey);

}

function setup() {
  createCanvas(500, 500);
  var movies = data.results;   //load data into movie array
  for (var i = 0; i < movies.length; i++) {                                       //create the same amount of instances of Visualization class as the
    visual[i] = new Visualization(random(0.1, 5), random(width), random(height)); //number of critically aclaimed movies
  }
  //noLoop();
}

function draw() {
  background(200, 215, 150);

  for (var i = 0; i < visual.length; i++) {        //call all class functions to create data visualization
    //console.log(visual.length);
    var rand = 0.05;
    var gravity = 0.1;
    fill(visual[i].c);
    visual[i].create();
    visual[i].horizMotion();
    visual[i].vertMotion(gravity);
    visual[i].vertMotion(rand);
    visual[i].update();
    if (keyIsPressed){
      if (key == 'g'){
          visual[i].group(width/2, height/2);
      }
    }
    visual[i].edges();
  }


}

