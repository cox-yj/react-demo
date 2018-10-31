import React, { Component } from 'react';
import Comment from './Comment'

class CommentList extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <div>
                {
                    this.props.comments.map((item, i) => {
                        return <Comment username={item.username} content={item.content} key={i}/>
                    })
                }
            </div>
        );
    }
}

export default CommentList;