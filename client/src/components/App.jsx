import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      limit: 1
    };
  }

  grabList() {
    //get all the stories from db when the component did mount.
    axios.get("http://localhost:3000/hostInfo").then(res => {
      this.setState({ stories: res.data });
    });
  }

  componentWillMount() {
    this.grabList();
  }

  render() {
    if (this.state.stories.length > 0) {
      return (
        <div>
          <h1> HOST_INFO</h1>
          <table>
            <thead />
            <tbody>
              {this.state.stories.map((newsItem, index) => {
                if (this.state.limit > index) {
                  return (
                    <ul>
                      <td>{newsItem.name}</td>
                      <td>{newsItem.image}</td>
                      <td>{newsItem.locationName}</td>
                      <td>{newsItem.responseRate}</td>
                      <td>{newsItem.responseTime}</td>
                      <td>{newsItem.joinedby}</td>
                    </ul>
                  );
                } else {
                  return;
                }
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div>
          <p>News stories are loading ....</p>
        </div>
      );
    }
  }
}
export default App;
