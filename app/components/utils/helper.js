// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");
import Form from '../Main.js';

// NY Times API
// var geocodeAPI = "35e5548c618555b1a43eb4759d26b260";
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  authKey + "&q=";

// FUNCTIONS
// Helper functions for making API Calls
var helper = {
  // This function serves our purpose of running the query to NY Times.
  runQuery: function(term, startYear, endYear) {
    console.log(articles);

    // Find articles
    // var queryURL = queryURLBase + setTerm.term + "&begin_date=" + setTerm.startYear + "0101&end_date="+ setTerm.endYear +"1231";

    return axios.get(queryURL).then(function(response) {
console.log(term, startYear, endYear);

      
      if (response.docs[i].headline.main) {
        return response.docs[i].headline.main;
      }
      // If we don't get any results, return an empty string
      return "Sorry, no results were returned.";

      // Log the first article's headline to console
        console.log(response.docs[i].headline.main);
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
