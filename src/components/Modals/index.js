import React, { Component } from 'react';
import './index.less';
import { Card, Button, Modal } from 'antd';


class Imodals extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modal1:false,
            modal2:false,
            modal3:false,
            modal4:false
         }
    }
    handleClick=(status,type)=>{
        this.setState({
                [type]: status
            });
    }
    handleCancle=(type)=>{
        this.setState({ [type]: false });
    }
    handleOk=(type)=>{
        this.setState({ [type]:false });
    }
    handleClickMes=(type)=>{
        Modal[type]({
            title:'信息确认',
            content:'确定吗？'
        })
    }
    render() { 
        return ( 
            <div>
                <Card title="基础弹框">
                    <Button type="primary" onClick={()=>this.handleClick(true,'modal1')}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleClick(true,'modal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleClick(true,'modal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={()=>this.handleClick(true,'modal4')}>水平垂直居中</Button>
                </Card>
                <Modal  
                    title="React"
                    visible = {this.state.modal1}
                    onCancel={()=>this.handleCancle('modal1')}
                    onOk={()=>this.handleOk('modal1')}
                >
                    <p>欢迎体验此项目Open</p>
                </Modal>
                <Modal  
                    title="React"
                    visible = {this.state.modal2}
                    okText="下一步"
                    cancelText = "算了"
                    onCancel={()=>this.handleCancle('modal2')}
                    onOk={()=>this.handleOk('modal2')}
                >
                    <p>欢迎体验此项目自定义页脚</p>
                </Modal>
                <Modal  
                    title="React"
                    visible = {this.state.modal3}
                    okText="确认"
                    cancelText = "取消"
                    onCancel={()=>this.handleCancle('modal3')}
                    onOk={()=>this.handleOk('modal3')}
                    style={{top:'20px'}}
                >
                    <p>欢迎体验此项目顶部20px</p>
                </Modal>
                <Modal  
                    title="React"
                    visible = {this.state.modal4}
                    okText="确认"
                    cancelText = "取消"
                    onCancel={()=>this.handleCancle('modal4')}
                    onOk={()=>this.handleOk('modal4')}
                    centered={true}
                >
                    <p>水平垂直居中</p>
                </Modal>
                <Card title="信息确认框"> 
                     <Button type="primary" onClick={()=>this.handleClickMes('confirm')}>confirm</Button>   
                     <Button type="primary" onClick={()=>this.handleClickMes('info')}>info</Button>   
                     <Button type="primary" onClick={()=>this.handleClickMes('success')}>success</Button>   
                     <Button type="primary" onClick={()=>this.handleClickMes('warning')}>warning</Button>   
                </Card>
            </div>
         );
    }
}
 
export default Imodals;