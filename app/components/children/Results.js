// Include React
var React = require("react");
import helper from '../utils/helper.js';

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
        <div className="well" id="article-well-1">      
  
           
        </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Results;
