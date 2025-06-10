import './App.css';
import React from 'react';
import {comments} from './commentData.js';
import Card from './card.js';

function App() {
  return (
    <div className="App">
      <div className="Header"><h1>Silly Kitty</h1></div>
      <div className="Image">
        <figure>
          <img src="https://www.shutterstock.com/image-photo/closeup-portrait-fluffy-purebred-cat-600nw-2447243735.jpg" alt="image" width="400px" height="400px"/>
          <figcaption>Cornileous say cheese!</figcaption>
        </figure>
      </div>
      <div className="buttons">
        <button className="back">back</button>
        <button className="next">next</button>
      </div>
      <div className="Card">
        {
          comments.map(comment => 
          <Card commentObject={comment}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
