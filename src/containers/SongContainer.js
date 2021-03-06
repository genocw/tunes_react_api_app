import React, {Component} from 'react';
import SongList from '../components/SongList.js';

class SongContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {songs: []}
  }

  componentDidMount() {

    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data.feed.entry})
    })
    request.send();
  }

  render() {
    return (
      <>
      <h1>Uk Top 20 Hits</h1>
      <SongList data={this.state.songs}/>
      </>
    )
  }

}

export default SongContainer;
