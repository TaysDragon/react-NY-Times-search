// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NY Times API
// var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

// These variables will hold the results we get from the user's inputs via HTML
var searchTerm = "";
var numResults = 5;
var startYear = 0;
var endYear = 0;


// FUNCTIONS
// Helper functions for making API Calls
var helper = {

// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey + "&q=";

// Initially sets the articleCounter to 0
// Counter to keep track of article numbers as they come in
var articleCounter = 0;  

  // This function serves our purpose of running the query to NY Times.
  runQuery: function(articles, queryURL) {
    console.log(articles);

    // Figure out the article
    var queryURL = queryURLBase + searchTerm;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property


       // Loop through and provide the correct number of articles
    for (var i = 0; i < numArticles; i++) {

      // Add to the Article Counter (to make sure we show the right number)
      articleCounter++;

      if (response.docs[i].headline.main) {
        return response.docs[i].headline.main;
      }
      // If we don't get any results, return an empty string
      return "";

      // Log the first article's headline to console
        console.log(response.docs[i].headline.main);
      }
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(savedArticles) {
    return axios.post("/api", { title: title,
      author: author,
      link: link,
      notes: notes
     });
  }
};

// We export the API helper
module.exports = helper;
