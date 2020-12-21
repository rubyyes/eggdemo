import React, { Component } from 'react';

export default class componentNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
          text:'demo'
        };
      console.log('constructor');
      // 事件绑定方法1
     // this.handleClick = this.handleClick.bind(this)
    }



  // 这个为 方法123的函数
    // handleClick(){
    //   alert('2')
    // }

    // 方法4函数
    handleClick = () =>{
      this.setState({
        text:'demo-new'
      })
    };
    // 监听组件更新
    static getDerivedStateFromProps(props,state){
      console.log('getDerivedStateFromProps');
      console.log(props,state);
      return state;
    }
    // 获取dom相关信息
    getSnapshotBeforeUpdate(){
      console.log('getSnapshotBeforeUpdate');
      return 'getSnapshotBeforeUpdate';
    }
    //
    componentDidUpdate(props,state,snapshot){
      console.log(snapshot);
    }

  render() {
      console.log('render');
        return (
          // 事件绑定方法2 在onClick上绑定
          //  <div onClick={this.handleClick.bind(this)}>
          //   componentOld---{this.state.text}
          // </div>
          // 事件绑定方法3 采用箭头函数改变函数指向
          // <div onClick={()=>this.handleClick.bind}>
          //  componentOld---{this.state.text}
          // </div>
          // 事件绑定方法4 es最新特性草案，umi已集成
          <div onClick={this.handleClick}>
           componentNew---{this.state.text}
          </div>
        )
    }
}

