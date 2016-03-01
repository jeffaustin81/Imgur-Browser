var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(TopicStore, 'onChange')],
  getInitialState: function() {
    return {topics: []}
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return (
      <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <div className="navbar-header">
        <Link to="/" className="navbar-brand">
          imgur browser
        </Link>
      </div>
      </div>
    </nav>
  );
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic) {
      return <li key={topic.id} className="display nav-items">
          <Link activeClassName="active" to={"topics/" + topic.id}>
            {topic.name}
          </Link>
        </li>
    });
  },
  onChange: function(event, topics) {
    this.setState({topics: topics});
  }
})
