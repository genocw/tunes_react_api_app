import React from 'react';
import Song from './Song.js';

const SongList = ({data}) => {


  const songs = data.map((song, index) => {
    return <Song
      artist={song["im:artist"].label}
      title={song.title.label}
      position={index + 1}
      key={song.id.label}
      image={song["im:image"][0]["label"]}
      link={song.link[0].attributes.href}
      genre={song.category.attributes.label}
      release={song["im:releaseDate"].attributes.label}
    />
  });

  return (
    <div className='song-list'>
      {songs}
    </div>
  );

}

export default SongList;
