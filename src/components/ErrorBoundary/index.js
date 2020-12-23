import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
          flag:false
        };
    }
    // 这个方法不是万能的，遇到 内部错误 或者 异步是没法检测
    static getDerivedStateFromError(error){
      console.log('error',error)
      return{
         flag : true
      }
    }

    // 抛出错误
    componentDidCatch(error,info){

    }


    render() {
        return (
            <div>{this.state.flag ? <h1>发送错误，请稍后重试</h1>: this.props.children}</div>
        )
    }
}

