import React, {PureComponent} from 'react';

export default class componentOld extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          text:'demo'
        };
      console.log('constructor');
      // 事件绑定方法1
     // this.handleClick = this.handleClick.bind(this)
    }
  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("componentWillUpdate")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate")
  }

  // 判断是否更新渲染
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log('shouldComponentUpdate');
  //   console.log(nextProps, nextState);
  //   if(nextState.text === 'demo-new' && this.state.text !== nextState.text){
  //      return  true;
  //   }
  //     return false;
  // }

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
           componentOld---{this.state.text}
          </div>
        )
    }
}

