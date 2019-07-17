import React from "react";
import styled from 'styled-components';
import Comment from './Comment';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  input {
    width: 100%;
    border-radius: 6px;
    outline: none;
    padding: 4px 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #0a0a0a;
  }

  button {
    border: none;
    color: #FFF;
    background-color: #9594bbcf;
    padding: 6px 12px;
    border-radius: 4px;
    margin: 4px;
    cursor: pointer;
  }
`;

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
      <PostContainer>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.onSubmitHandle}>
          <input
            value={this.state.currentInputText}
            onChange={this.onInputChange} required></input>
          <button type="submit">Comentar</button>
        </form>
        {this.state.comments.map((comment, index) =>
          <Comment key={index} text={comment} />
        )}
      </PostContainer>
    );
  }
}