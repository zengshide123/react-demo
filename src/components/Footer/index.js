import React, { Component } from 'react';
import './index.less';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer_wrap">
                版权所有: 天天 (推荐使用谷歌浏览器,可以获得更优的使用体验)
            </div>
         );
    }
}
 
export default Footer;