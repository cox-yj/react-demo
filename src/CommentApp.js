import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            comments: []
        }
    }
    headleSubmitComment({username ='', content=''}){
        let comments = this.state.comments
        if (!username) return alert('请输入用户名')
        if (!content) return alert('请输入评论内容')
        comments.push({username, content})
        this.setState({comments})
    }
    render() {
        return (
            <div className='wrapper'>  
                <CommentInput onSubmit={this.headleSubmitComment.bind(this)}/>   
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp