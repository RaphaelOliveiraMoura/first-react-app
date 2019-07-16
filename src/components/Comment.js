import React from "react";

export default class Comment extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
      </div>
    );
  }
}