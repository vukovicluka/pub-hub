import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div style={{ margin: 10 }}>
            <label htmlFor='title'>Title:</label>
            <br />
            <input
              type='text'
              name='title'
              placeholder='Title'
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div style={{ margin: 10 }}>
            <label htmlFor='content'>Body</label>
            <br />
            <textarea
              name='body'
              placeholder='Body...'
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <br />
          <button type='submit' style={{ margin: 10 }}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
