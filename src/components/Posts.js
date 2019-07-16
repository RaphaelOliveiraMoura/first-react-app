import React from 'react';

import Post from './Post';

export default class Posts extends React.Component {

  state = {
    posts: [
      'Aprendendo React com a RocketSeat',
      'Machine Learning with JavaScript',
      'Design Patterns in Java'
    ]
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post, index) =>
          <Post key={index} title={post} />
        )}
      </div>
    );
  }
}