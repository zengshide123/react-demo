import React, { Component } from 'react';
import './index.less';
import {Card, Button,notification}  from 'antd';

    notification.config({
        duration: 1.5,
    });
class Inotification extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.mes = {
            success:{
                message:'成功',
                description:'真好'
            },
            info:{
                message:'消息',
                description:'我来了'
            },
            warning:{
                message:'警告',
                description:'有点问题哦'
            },
            error:{
                message:'失败',
                description:'糟糕，出错了'
            }
        }
    }
    handleClick=()=>{
        notification.open({
            message: '欢迎欢迎',
            description: '你今天心情怎么样？',
            duration:5,
            className:'notificatioan_wrap'
          });
    }
    openNotificationWithIcon=(type)=>{
        notification[type](this.mes[type]);
    }
    render() { 
        return ( 
            <div>
                <Card title="通知提醒">
                    <Button type="primary" onClick={this.handleClick}>点击提示</Button>
                </Card>
                <Card title="不同状态通知提醒">
                <Button type="primary" onClick={() => this.openNotificationWithIcon('success')}>成功</Button>
                <Button type="primary" onClick={() => this.openNotificationWithIcon('info')}>信息</Button>
                <Button type="primary" onClick={() => this.openNotificationWithIcon('warning')}>警告</Button>
                <Button type="primary" onClick={() => this.openNotificationWithIcon('error')}>错误</Button>
                </Card>
            </div>
         );
    }
}
 
export default Inotification;