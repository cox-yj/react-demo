import React, { Component } from 'react';

class Clock extends Component {
    constructor(){
        super()
        this.state={
            times: new Date()
        }
    }
    componentWillMount(){
        this.timer = setInterval(()=>{
            this.setState({times: new Date()})
        }, 1000)
        console.log('render之前' , arguments)
    }
    // render之后
    componentDidMount(){
        console.log('render之后' , arguments)
    }
    render() {
        return (
            <div>
                <p>当前时间：</p>
                <p>{this.state.times.getTime()}</p>
            </div>
        );
    }
    componentWillUnmount(){
        console.log('删除了==>', this.state.times)
        clearInterval(this.timer)
    }
}

export default Clock;