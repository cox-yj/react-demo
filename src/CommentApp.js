import React, { Component } from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
// import Clock from './Clock.js'

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            comments: [],
            isShow: false
        }
    }
    headleSubmitComment({username ='', content=''}){
        this.setState({isShow: !this.state.isShow})
        let comments = this.state.comments
        if (!username) return alert('请输入用户名')
        if (!content) return alert('请输入评论内容')
        comments.push({username, content})
        this.setState({comments, isShow: !this.state.isShow})
    }
    render() {
        return (
            <div className='wrapper'>  
                <CommentInput onSubmit={this.headleSubmitComment.bind(this)}/>   
                {
                    this.state.comments.length? <CommentList comments={this.state.comments}/>: ''
                }
                {/* {
                    this.state.isShow?<Clock />: ''
                } */}
            </div>
        )
    }
}

export default CommentApp