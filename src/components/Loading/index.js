import React, { Component } from 'react';
import './index.less';
import {Card ,Spin,Icon,Alert,Switch } from 'antd'


class Iloading extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading:false
         }
    }
    toggle=()=>{
        this.setState({ loading:!this.state.loading  });
    }
    render() { 
                const self_define_icon = (<Icon type="loading" style={{ fontSize: 24 }} spin />);
        return ( 
            <div>
                <Card title="loading效果">
                    <Spin/>
                </Card>
                <Card title="loading大小效果" className="spin_size_wrap">
                    <Spin size="small"/>
                    <Spin />
                    <Spin size="large"/>
                </Card>
                <Card title="自定义图片">
                    <Spin indicator={self_define_icon} />
                </Card>
                <Card title="带文字效果">
                    <Spin tip="奔跑中..."/>
                </Card>
                <Card title="内容遮罩">
                    <Spin spinning={this.state.loading} delay={500}>
                        <Alert
                            message="遮住了没有"
                            description="loading状态触发时，我会被遮住！"
                            type="info"
                        />
                    </Spin>
                    <div className="control_loading_switch">
                        <Switch
                            checked={this.state.loading}
                            onChange={this.toggle}
                            checkedChildren="开"
                            unCheckedChildren="关"
                        />
                    </div>
                </Card>
            </div>
         );
    }
}
 
export default Iloading;