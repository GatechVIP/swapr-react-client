import React, { Component }  from 'react';
import '../stylesheets/index.css';
import YouTube from 'react-youtube'

export default class GradeAssignment extends Component {
    render() {
        return (
            <div id = "submitColumn" classname = "col-lg-5">
              <h1>Now grading User 1's Lab1</h1>
              <YoutubeVideo />
              <SubmitGrade />
            </div>
        );
    }
}

class YoutubeVideo extends React.Component {
    render() {
      const opts = {
        height: '720',
        width: '1280',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        },
          // border-left: 100% solid black;
      };
  
      return (
        <div id="wrapper">
          <div id="yourdiv">
            <YouTube
              videoId="FkoEEqyXpIA"
              opts={opts}
              onReady={this._onReady}
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

class SubmitGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comment: '', organizationalStructure: 5, contentModels: 5, 
      contentPredictionDiscussion: 5, contentOverall : 5, productionDelivery: 5};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitGrade = this.handleSubmitGrade.bind(this);
    this.handleChangeOS = this.handleChangeOS.bind(this);
    this.handleChangeCM = this.handleChangeCM.bind(this);
    this.handleChangeCPD = this.handleChangeCPD.bind(this);
    this.handleChangeCO = this.handleChangeCO.bind(this);
    this.handleChangePD = this.handleChangePD.bind(this);
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  handleChangeOS(event) {
    if (event.target.value <= 5 && event.target.value > 0) {
      this.setState({organizationalStructure: event.target.value});
    }
  }

  handleChangeCM(event) {
    if (event.target.value <= 5 && event.target.value > 0) {
      this.setState({contentModels: event.target.value});
    }
  }
  
  handleChangeCPD(event) {
    if (event.target.value <= 5 && event.target.value > 0) {
      this.setState({contentPredictionDiscussion: event.target.value});
    }
  }

  handleChangeCO(event) {
    if (event.target.value <= 5 && event.target.value > 0) {
      this.setState({contentOverall: event.target.value});
    }
  }

  handleChangePD(event) {
    if (event.target.value <= 5 && event.target.value > 0) {
      this.setState({productionDelivery: event.target.value});
    }
  }

  handleSubmitGrade(event) {
    var sum = parseInt(this.state.organizationalStructure) + parseInt(this.state.contentModels)
    + parseInt(this.state.contentPredictionDiscussion) + parseInt(this.state.contentOverall)
    + parseInt(this.state.productionDelivery);
    alert('Submitted grade for User 1. Grade Given is ' + sum + '/25. Extra comments: ' + this.state.comment);
    event.preventDefault();
    //Ajax post call
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitGrade}>
        <div id = ".main-page" className = "col-lg-6">
          <h3>
            Organizational Structure:
            <input type="integer" value={this.state.organizationalStructure} onChange={this.handleChangeOS} />
          </h3>
          <h3>
            Content Models:
            <input type="integer" value={this.state.contentModels} onChange={this.handleChangeCM} />
          </h3>
          <h3>
            Content Prediction Discussion:
            <input type="integer" value={this.state.contentPredictionDiscussion} onChange={this.handleChangeCPD} />
          </h3>
          <h3>
            Content Overall:
            <input type="integer" value={this.state.contentOverall} onChange={this.handleChangeCO} />
          </h3>
          <h3>
            Production Delivery:
            <input type="integer" value={this.state.productionDelivery} onChange={this.handleChangePD} />
          </h3>
          <h3>
            Comments:
            <input type="text" value={this.state.comment} onChange={this.handleChange} />
          </h3>
        </div>

        <input type="submit" value="Submit Evaluation"/>
      </form>
    );
  }
}