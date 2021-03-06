import React, { Component }  from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube'

import '../stylesheets/index.css';

class GradeAssignment extends Component {
    render() {
        return (
            <div id = "submitColumn" classname = "col-lg-5">
              <h3>Now grading User 1's Lab1</h3>
              <YoutubeVideo />
              <SubmitGrade />
            </div>
        );
    }
}

class YoutubeVideo extends Component {
    render() {
      const opts = {
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        },
          // border-left: 100% solid black;
      };
  
      return (
        <div id="wrapper">
          <div id="yourdiv">
            <YouTube
              videoId="eBDPZrocv64"
              opts={opts}
              onReady={this._onReady}
              // style="max-width: 100%; max-height: 100%;"
            />
          </div>
        </div>
      );
    }
  
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  
  }

class SubmitGrade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentOS : '',
      commentCM : '',
      commentCPD : '',
      commentCO : '',
      commentPD : '',
      organizationalStructure : 5,
      contentModels : 5,
      contentPredictionDiscussion : 5,
      contentOverall : 5,
      productionDelivery : 5
    };

    this.handleChangeCommentOS = this.handleChangeCommentOS.bind(this);
    this.handleChangeCommentCM = this.handleChangeCommentCM.bind(this);
    this.handleChangeCommentCPD = this.handleChangeCommentCPD.bind(this);
    this.handleChangeCommentCO = this.handleChangeCommentCO.bind(this);
    this.handleChangeCommentPD = this.handleChangeCommentPD.bind(this);
    this.handleSubmitGrade = this.handleSubmitGrade.bind(this);
    this.handleChangeOS = this.handleChangeOS.bind(this);
    this.handleChangeCM = this.handleChangeCM.bind(this);
    this.handleChangeCPD = this.handleChangeCPD.bind(this);
    this.handleChangeCO = this.handleChangeCO.bind(this);
    this.handleChangePD = this.handleChangePD.bind(this);
  }

  handleChangeCommentOS(event) {
    this.setState({commentOS: event.target.value});
  }

  handleChangeCommentCM(event) {
    this.setState({commentCM: event.target.value});
  }

  handleChangeCommentCPD(event) {
    this.setState({commentCPD: event.target.value});
  }

  handleChangeCommentCO(event) {
    this.setState({commentCO: event.target.value});
  }

  handleChangeCommentPD(event) {
    this.setState({commentPD: event.target.value});
  }

  handleChangeOS(event) {
      this.setState({organizationalStructure: event.target.value.charAt(0)});
  }

  handleChangeCM(event) {
      this.setState({contentModels: event.target.value.charAt(0)});
  }
  
  handleChangeCPD(event) {
      this.setState({contentPredictionDiscussion: event.target.value.charAt(0)});
  }

  handleChangeCO(event) {
      this.setState({contentOverall: event.target.value.charAt(0)});
  }

  handleChangePD(event) {
      this.setState({productionDelivery: event.target.value.charAt(0)});
  }

  handleSubmitGrade(event) {
    var sum = parseInt(this.state.organizationalStructure) + parseInt(this.state.contentModels)
    + parseInt(this.state.contentPredictionDiscussion) + parseInt(this.state.contentOverall)
    + parseInt(this.state.productionDelivery);
    alert('Submitted grade for User 1. Grade Given is ' + sum + '/25. OS Comment: ' + this.state.commentOS
        + ' CM Comment: ' + this.state.commentCM + ' CPD Comment: ' + this.state.commentCPD + ' CO Comment: '
        + this.state.commentCO + ' PD Comment: ' + this.state.commentPD);
    event.preventDefault();
    //Ajax post call
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitGrade}>
        <div id = ".main-page" className = "col-lg-6">
          <p>
            Organizational Structure:
          </p>
          <p>
            <select onChange={this.handleChangeOS}>
              <option>5 (Excellent)</option>
              <option>4 (Great)</option>
              <option>3 (Good)</option>
              <option>2 (Fair)</option>
              <option>1 (Poor)</option>
            </select>
          </p>
          <p>Comments: </p>
          <p>
            <textarea rows="4" cols="50" value={this.state.commentOS} onChange={this.handleChangeCommentOS} >
              Comments
            </textarea>
          </p>
          <p>
            Content Models:
          </p>
          <p>
            <select onChange={this.handleChangeCM}>
              <option>5 (Excellent)</option>
              <option>4 (Great)</option>
              <option>3 (Good)</option>
              <option>2 (Fair)</option>
              <option>1 (Poor)</option>
            </select>
          </p>
          <p>Comments: </p>
          <p>
            <textarea rows="4" cols="50" value={this.state.commentCM} onChange={this.handleChangeCommenCM} >
              Comments
            </textarea>
          </p>
          <p>
            Content Prediction Discussion:
          </p>
          <p>
            <select onChange={this.handleChangeCPD}>
              <option>5 (Excellent)</option>
              <option>4 (Great)</option>
              <option>3 (Good)</option>
              <option>2 (Fair)</option>
              <option>1 (Poor)</option>
            </select>
          </p>
          <p>Comments: </p>
          <p>
            <textarea rows="4" cols="50" value={this.state.commentCPD} onChange={this.handleChangeCommentCPD} >
              Comments
            </textarea>
          </p>
          <p>
            Content Overall:
          </p>
          <p>
            <select onChange={this.handleChangeCO}>
              <option>5 (Excellent)</option>
              <option>4 (Great)</option>
              <option>3 (Good)</option>
              <option>2 (Fair)</option>
              <option>1 (Poor)</option>
            </select>
          </p>
          <p>Comments: </p>
          <p>
            <textarea rows="4" cols="50" value={this.state.commentCO} onChange={this.handleChangeCommentCO} >
              Comments
            </textarea>
          </p>
          <p>
            Production Delivery:
          </p>
          <p>
            <select onChange={this.handleChangePD}>
              <option>5 (Excellent)</option>
              <option>4 (Great)</option>
              <option>3 (Good)</option>
              <option>2 (Fair)</option>
              <option>1 (Poor)</option>
            </select>
          </p>
          <p>Comments: </p>
          <p>
            <textarea rows="4" cols="50" value={this.state.commentPD} onChange={this.handleChangeCommentPD} >
              Comments
            </textarea>
          </p>
        </div>
        <p></p>
        <input type="submit" value="Submit Evaluation"/>
      </form>
    );
  }
}

const connectedGradeAssignment = connect()(GradeAssignment);
export { connectedGradeAssignment as GradeAssignment };
