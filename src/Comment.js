import React, { Component } from 'react';

class Comment extends Component {
    constructor(props){
        super()

    }
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.username}</span>：
                </div>
                {this.props.content}
            </div>
        );
    }
}

export default Comment;