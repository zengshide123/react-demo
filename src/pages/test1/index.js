import React, { Component } from 'react';
import './index.less';
import { DatePicker,Button ,Rate  } from 'antd';

class Test1 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                 <h3>测试</h3>
                 <DatePicker/>
                 <Button type="primary">Primary</Button>
                 <Button type="default">Primary</Button>
                 <Rate allowHalf defaultValue={2.5} />
            </div>
         );
    }
}
 
export default Test1;