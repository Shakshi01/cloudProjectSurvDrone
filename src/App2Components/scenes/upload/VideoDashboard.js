import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from "../../components/Header";

import './Dashboard.css';

class VideoDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: []
    }
  }

  componentDidMount() {
    if (true) {
      axios.get('http://localhost:5001/api/videoList', {
      }).then(res => {
        this.setState({
          videoList: res.data
        });
      });
    }
  }

  render() {

    const videos = this.state.videoList.map(video => {
      return (
        <div className="video-link" key={video._id}>
          <Link variant to={'http://localhost:5001/api/videos/' + video.upload_title + ".mp4"}>
          {video.upload_title.replace(/_/g, ' ')}
          </Link>
          <br/>
        </div>
      );
    });

    return (
        <div className="container mt-5">
          <Header title="Videos" />
          <div className="video-list">
            {videos}
          </div>
        </div>
    );
  }
}

export default VideoDashboard;