import React from 'react';
import Header from './header.js';
import Body from './body.js';

function Card(props){
  return (
    <div className="card">
      <Header profileImg={props.commentObject.profileImg} username={props.commentObject.username} />
      <Body comment={props.commentObject.comment} />
    </div>
  )
}

export default Card;
