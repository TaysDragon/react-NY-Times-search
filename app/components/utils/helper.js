// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");
import Form from '../Main.js';

// NY Times API
var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

var queryURLBase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='+authKey+"&q=";


// FUNCTIONS
// Helper functions for making API Calls
var helper = {
  // This function serves our purpose of running the query to NY Times.
  runQuery: function(search) {
// console.log("helper 16" + term+ startYear+ endYear);

var formattedTerm = search.term.trim();
var formattedStart = search.startYear.trim() + "0101";
var formattedEnd = search.endYear.trim() + "1231";
console.log("helper 21"+formattedTerm+ formattedStart+ formattedEnd);

    // Find articles
  var queryURL = queryURLBase + formattedTerm + "&begin_date=" + formattedStart + "&end_date="+ formattedEnd;
 console.log("helper 25"+queryURL);

        return axios.get(queryURL).then(function(response){
            if(response.data.response.docs){
                var results = [];
                for(var i=0; i<5; i++){
                    results.push(response.data.response.docs[i])
                };

                return results;

            }
            // If we don't get any results, return an empty string
                return "Sorry, no results were returned.";
        });
       // Log the first article's headline to console
        console.log(results); 
    },

      
      

postArticles: function(result){
        return axios.post("/api", {
            title: result.headline.main,
            author: result.byline.original,
            link: result.web_url
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
