import React, { Component } from 'react';
import '../stylesheets/index.css';
import YouTube from 'react-youtube';

// Require stylesheets as needed
// must run npm install --save bootstrap before importing
//must change class to className

class Assignment extends Component {
    render() {
        return(
            <div className="MainPage">
                <div>
                    <YoutubeVideo />
                    <Description />
                    <Upload />
                </div>
            </div>
        );
    }
}


class YoutubeVideo extends Component {
    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <YouTube
                videoId="JLujPMiR-uE"
                opts={opts}
                onReady={this._onReady}
                style="max-width: %75; max-height: %75;"
            />
        );
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}


function Description(props) {
    return(<p>The above video describes the assignment.</p>);
}

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An assignment was submitted: ' + this.state.value);
        event.preventDefault();
        //Ajax post call
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <p>
                                Video Submission:
                            </p>
                        </td>
                        <td>
                            <p>
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="submit" value="Submit" />
                        </td>
                    </tr>
                </table>
            </form>
        );
    }
}

export default Assignment;
