import React, { Component } from 'react';
import './index.less';
import {Button , Card,Icon,Radio} from 'antd';


class Ibutton extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            size:'default'
         }
    }
    handleClick=()=>{
        alert('click trigger')
    }
    handleChange=(e)=>{
        this.setState({size: e.target.value});
    }
    render() { 
        return ( 
            <div>
                <Card title="基础按钮">
                    <Button type="primary">天天</Button>
                    <Button type="default">天天</Button>
                    <Button type="dashed">天天</Button>
                    <Button type="danger">天天</Button>
                    <Button disabled>天天</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape="circle"></Button>
                    <Button icon="search"> 搜索</Button>
                    <Button icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading>确定</Button>
                    <Button type="primary" loading shape="circle"></Button>
                    <Button loading>点击加载</Button>
                    <Button shape="circle" loading></Button>
                    <Button type="primary" onClick={this.handleClick}>关闭</Button>
                </Card>
                <Card title="按钮组" className="bt_group_wrap">
                    <Button.Group>
                        <Button >
                            <Icon type="left"/>    
                            返回
                        </Button>
                        <Button >
                            前进
                            <Icon type="right"/>
                        </Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="large">大</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="small">小</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>天天</Button>
                    <Button size={this.state.size}>天天</Button>
                    <Button size={this.state.size} type="danger">天天</Button>
                    <Button size={this.state.size} disabled>天天</Button>
                </Card>
            </div>
         );
    }
}
 
export default Ibutton;