import React from 'react';

const Song = (props) => (
  <>
    <h3>{props.position}. {props.title}</h3>
    <h4> By {props.artist}</h4>
    <p>{props.genre}</p>
    <p>Released on: {props.release}</p>
    <a href={props.link}><p>View in iTunes</p></a>
    <img src={props.image}/>
  </>
)

export default Song;
