import React, {Component,createRef } from 'react';
import Child from './child';
import {Button} from "antd-mobile";
import InputForward from "@/pages/class/refs/forward";
// 组件首字符大写
export default class Refs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.domRef = createRef();
        this.childRef = createRef();
      this.inputRef = createRef();
    }

    componentDidMount(){
      console.log(this.domRef.current.innerHTML)
      this.inputRef.current.focus();
    }
    handleChild(str){
        this.childRef.current.changeText(str)
    }
    render() {
        return (
          <div>
            <h1 ref={this.domRef}>ref text</h1>
            <Child ref={this.childRef} />
            <Button onClick={()=>{ this.handleChild('new text')}}>修改child的值</Button>
            <InputForward ref={this.inputRef}/>
          </div>
        )
    }
}

