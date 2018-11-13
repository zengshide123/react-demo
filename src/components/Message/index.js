import React, { Component } from 'react';
import './index.less';
import { Card ,message,Button } from 'antd';

    message.config({
        top: 100,
        duration: 2,
        maxCount: 5,
    });
class Imessages extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    info = () => {
        message.info('This is a normal message');
      }
    success = () => {
        message.success('This is a message of success');
    
    }
    error = () => {
        message.error('This is a message of error');
      }
    warning = () => {
        message.warning('This is message of warning');
      }
    loading = () => {
        message.loading('This is message of loading');
      }
    render() { 
        return ( 
            <div>
                <Card title="提示框">
                     <Button type="primary" onClick={this.info}>点击提示</Button>  
                </Card>
                <Card title="状态提示框">
                    <Button onClick={this.success}>成功</Button>
                    <Button onClick={this.error}>失败</Button>
                    <Button onClick={this.warning}>警告</Button>
                    <Button onClick={this.loading}>加载</Button>
                </Card>
            </div>
         );
    }
}
 
export default Imessages;