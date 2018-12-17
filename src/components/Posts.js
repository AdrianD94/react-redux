import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions';

export class Posts extends Component {
 
componentDidMount(){
  this.props.fetchPosts();
}

 render() {
    const Users = this.props.posts.map(post =>(
        <div key= {post.id}>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
                       
        </div>
    
    ))
    return (
      <div>
       Posts:
       {Users}

      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts:state.posts.items
})

export default connect(mapStateToProps,{fetchPosts})(Posts)