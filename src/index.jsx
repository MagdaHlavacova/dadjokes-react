import React from 'react';
import { render } from 'react-dom';
import { jokes } from './jokes';
import './style.css';
import Joke from './Joke/';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          userName={joke.name}
          userAvatar={joke.avatar}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
          key={joke.id}
        />
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
