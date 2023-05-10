import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

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
        <div className="" key={video._id}>
          <Link to={'http://localhost:5001/api/videos/' + video.upload_title + ".mp4"}>
          {video.upload_title.replace(/_/g, ' ')}
          </Link>
          <br/>
        </div>
      );
    });

    return (
        <div className="container mt-5">
          <h4>Videos</h4>
          <div className="">
            {videos}
          </div>
        </div>
    );
  }
}

export default VideoDashboard;