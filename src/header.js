import React from 'react';

function Header(props){
  return (
    <div>
      <img className="header" src={props.profileImg}></img>
      <h1>{props.username}</h1>
    </div>
  )
}

export default Header;
