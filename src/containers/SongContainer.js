import React, {Component} from 'react';
import SongList from '../components/SongList.js';

class SongContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {songs: []}
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
