// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

// Helper for making AJAX requests to our API
var helper = require("./utils/helper");

// Creating the Main component
var Main = React.createClass({

//InitialState for this specific page, should not be the same as InitialState in Form.js
  getInitialState: function() {
    return { setTerm: [], results: [], history: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helper.getHistory().then(function(response) {
      console.log(response);
      if (response !== this.state.history) {
        console.log("History", response.data);
        this.setState({ history: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the search term, startYear, and endYear 
    helper.runQuery(this.state.term, this.state.startYear, this.state.endYear).then(function(data) {
      if (data !== this.state.results) {
        console.log("Results", data);
        this.setState({ results: data });
      }
    }.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(term, startYear, endYear) {
    this.setState({ term: term, 
      startYear: startYear, 
      endYear: endYear});
    console.log(setTerm);
  },
  // Here we render the function
  //The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX. This DOM node was rendered by `Main`.
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times!</strong></h1>
            <p className="text-center">
              <em>Search and Save.</em>
            </p>
          </div>

          <div className="col-sm-12">

            <Form setTerm={this.setTerm} />

          </div>

          <div className="col-sm-12">

            <Results address={this.state.results} />

          </div>

        <div className="col-sm-12">

          <History history={this.state.history} />

        </div>

      </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
