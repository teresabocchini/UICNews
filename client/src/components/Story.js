import React, { Component } from "react";
import PropTypes from "prop-types";

class Story extends Component {
  state = {
    showStoryInfo: false
  };

  render() {
    const { name, description, url, datePublished } = this.props.story;
    const { showStoryInfo } = this.state;
    const date = new Date(datePublished);

    return (
      <div className="card card-body mb-3">
        {showStoryInfo ? (
          <h4>
            {name}{" "}
            <i
              onClick={() =>
                this.setState({ showStoryInfo: !this.state.showStoryInfo })
              }
              className="fas fa-chevron-up"
            />
          </h4>
        ) : (
          <h4>
            {name}{" "}
            <i
              onClick={() =>
                this.setState({ showStoryInfo: !this.state.showStoryInfo })
              }
              className="fas fa-chevron-down"
            />
          </h4>
        )}
        <h6> {date.toLocaleDateString()}</h6>
        {showStoryInfo ? (
          <ul className="list-group">
            <li className="list-group-item border-0">
              Description: {description}
            </li>
            <li className="list-group-item border-0">
              URL: <a href={url}> {url} </a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Story.propTypes = {
  story: PropTypes.object.isRequired
};

export default Story;
