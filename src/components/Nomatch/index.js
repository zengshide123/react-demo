import React, { Component } from 'react';
import './index.less' ;

class Nomatch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                没有匹配到页面
            </div>
         );
    }
}
 
export default Nomatch;