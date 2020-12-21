import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class ListItem1 extends Component {
   static defaultProps = {
     name:'item1'
   };

   static propTypes = {
     name : PropTypes.string // number function array
   };
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick = ()=>{
      this.props.handleItem('item1');
    };

    render() {
        return (
            <div
              onClick={this.handleClick}
            >ListItem1:{this.props.name}</div>
        )
    }
}

