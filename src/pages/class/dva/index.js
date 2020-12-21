import React, {Component} from 'react';
import Search from "@/pages/class/dva/search";
import Lists from "@/pages/class/dva/list";
import {connect} from 'dva'

class Dva extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
              <Search {...this.props} />
              <Lists {...this.props}/>
            </div>
        )
    }
}

export default connect(({search})=>({
  search
}))(Dva);
