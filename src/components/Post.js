import React from "react";

import Comment from './Comment';

export default class Post extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      currentInputText: ''
    }

    this.onSubmitHandle = this.onSubmitHandle.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmitHandle(event) {
    event.preventDefault();

    this.setState({
      comments: [
        ...this.state.comments,
        this.state.currentInputText
      ],
      currentInputText: ''
    })
  }

  onInputChange(event) {
    this.setState({
      currentInputText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.onSubmitHandle}>
          <input
            value={this.state.currentInputText}
            onChange={this.onInputChange}></input>
          <button type="submit">Comentar</button>
        </form>
        {this.state.comments.map((comment, index) =>
          <Comment key={index} text={comment} />
        )}
      </div>
    );
  }
}