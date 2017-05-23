// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { term: "", startYear: "", endYear: ""};
  },

  // This function will respond to the user input (this is boilerplate, make changes in the render)
  handleChange: function(event) {
  var newState = {};
  console.log(event.target);
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    console.log(newState);
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search terms
    this.props.setTerm({
      term: this.state.term,
      startYear:this.state.startYear, 
      endYear:this.state.endYear});
    },
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center"><strong><i className="fa  fa-list-alt"></i>   Search Parameters</strong></h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Search Term:</strong>
              </h4>

              {/*
                Note how each of the form elements has an id that matches the state.
                This is not necessary but it is convenient.
                Also note how each has an onChange event associated with our handleChange event.
              */}
              <input
                value={this.state.term}
                type="text"
                className="form-control text-center"
                id="term"
                placeholder="What articles would you like to find?"
                onChange={this.handleChange}
                required
              />
              <br />

              <h4 className="">
                <strong>Start Year:</strong>
              </h4>
<input
                value={this.state.startYear}
                type="number"
                className="form-control text-center"
                id="startYear"
                placeholder="1851"
                onChange={this.handleChange}
                required
              />
              <br />

              <h4 className="">
                <strong>End Year:</strong>
              </h4>

              <input
                value={this.state.endYear}
                type="number"
                className="form-control text-center"
                id="endYear"
                placeholder="2017"
                onChange={this.handleChange}
                required
              />
              <br />


              <button
                className="btn btn-primary"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
