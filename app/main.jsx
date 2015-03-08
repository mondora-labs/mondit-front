var React = require("react/addons");
var Router = require("react-router");

var routes = require("lib/routes");
var ceres = require("lib/ceres");

Router.run(routes, Router.HashLocation, function (Handler) {
    React.render(<Handler />, document.body);
});
