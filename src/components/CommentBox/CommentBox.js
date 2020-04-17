import React from "react";
import PropTypes from "prop-types";

import "./CommentBox.css";

const data = {
  id: 1,
  user: {
    id: 35,
    username: "Denis",
  },
  content: "Hello, world!",
  comments: [
    {
      id: 1,
      user: {
        id: 22,
        username: "Nick",
      },
      content: "This is the best!",
    },
    {
      id: 2,
      user: {
        id: 46,
        username: "Alice",
      },
      content: "Awesome",
    },
  ],
};

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(newComment) {
    this.setState(() => ({
      comments: this.state.comments.concat([newComment]),
    }));
  }

  render() {
    return React.createElement(
      "div",
      {
        className: "postBox",
      },
      React.createElement(
        "div",
        {
          className: "post",
        },
        React.createElement("h1", {}, this.props.user.username + " posted"),
        React.createElement("p", {}, this.props.content)
      ),
      this.state.comments.map(function (comment) {
        return React.createElement(Comment, {
          key: comment.id,
          id: comment.id,
          user: comment.user,
          content: comment.content,
        });
      }),
      React.createElement(CreateComment, {
        addComment: this.addComment,
      })
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

class Comment extends React.Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "comment",
      },
      React.createElement("h2", {}, this.props.user.username + " commented"),
      React.createElement("p", {}, this.props.content)
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      content: "",
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleUsernameChange(event) {
    const newUsername = event.target.value;
    this.setState(() => ({
      username: newUsername,
    }));
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  handleCommentSubmit(event) {
    event.preventDefault();
    this.props.addComment({
      id: Date.now(),
      user: {
        id: Date.now(),
        username: this.state.username,
      },
      content: this.state.content,
    });
    this.setState(() => ({
      username: "",
      content: "",
    }));
  }

  render() {
    return React.createElement(
      "form",
      {
        onSubmit: this.handleCommentSubmit,
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Your name",
        value: this.state.username,
        onChange: this.handleUsernameChange,
      }),
      React.createElement("input", {
        type: "text",
        placeholder: "Type your comment...",
        value: this.state.content,
        onChange: this.handleContentChange,
      }),
      React.createElement("input", {
        type: "submit",
        value: "Send",
      })
    );
  }
}

CreateComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

const CommentBox = () => {
  return React.createElement(Post, {
    id: data.id,
    user: data.user,
    content: data.content,
    comments: data.comments,
  });
};

export default CommentBox;
