import React, {Component} from 'react';
import { SearchBar} from "antd-mobile";

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value :''
        };
    }

    handleChange = (value) =>{
      this.setState({
        value
      })
    };

    handleSubmit = (value) =>{
      this.props.dispatch({
        type:'search/getListAsync', // 命名空间namespace/方法名
        payload: this.state.value
      })
      // alert(value)
    };

    render() {
        return (
            <div>
              <SearchBar
                autoFocus
                value={this.state.value}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              />
            </div>
        )
    }
}

