import React from 'react';

const Song = ({artist, title, position}) => (
  <>
    <h3>{position}. {title}</h3>
    <h5>by {artist}</h5>
  </>
)

export default Song;
