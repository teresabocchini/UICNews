import React, { Component } from "react";
import Story from "./Story";

class Stories extends Component {
  state = {
    stories: [],
    loading: false,
    error: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://uicnews.azurewebsites.net/api/getNews")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          stories: data,
          loading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          stories: [],
          loading: false,
          error: error
        });
      });
  }

  render() {
    const { stories, loading, error } = this.state;

    if (!!error) {
      return (
        <div>
          <h4>
            There was an error retrieving news articles. Please try again.
          </h4>
        </div>
      );
    }

    if (loading) {
      return (
        <div>
          <h4> Loading... </h4>
        </div>
      );
    }

    if (stories.length <= 0) {
      return (
        <div>
          <h4> No stories mention UIC in the last 6 months. </h4>
        </div>
      );
    }

    return (
      <div>
        <div align="right">{stories.length} Stories Found</div>
        {stories.map(story => (
          <Story story={story} />
        ))}
      </div>
    );
  }
}

export default Stories;
