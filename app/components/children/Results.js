// Include React
var React = require("react");

// Creating the Results component
var Results = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title text-center"><strong><i className="fa  fa-list-alt"></i> Top Articles:</strong></h3>
        </div>
        <div className="panel-body text-center">

        //<div class="well" id="article-well-1">
        <h3 class="articleHeadline">
<span class="label label-primary">{articleCounter}</span>
<strong>{Title}</strong></h3>
<h5>By {author}</h5></div>  
          <p>{this.props.address}</p>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
