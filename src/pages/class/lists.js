import React, {Component} from 'react';
import ListItem1 from "@/pages/class/list-item1";
import ListItem2 from "@/pages/class/list-item2";

export default class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name : 'item-name2'
        };
    }

    handleChild = (msg) => {
      this.setState({
        name:msg
      })
    };

    render() {
        return (
            <div>
              <ListItem1 name={'item10'} handleItem={this.handleChild} />
              <ListItem2 name={this.state.name}  />
            </div>
        )
    }
}

