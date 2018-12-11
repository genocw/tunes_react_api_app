import React from 'react';
import Song from './Song.js';

const SongList = ({data}) => {

  const songs = data.map((song) => {
    return <Song
      // artist={song.?}
      // title={song.?}
      // position={song.?}
    />
  });

  return (
    <div className='song-list'>
      {songs}
    </div>
  );

}

export default SongList;
