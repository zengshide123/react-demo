import React, { Component } from 'react';
import './index.less';
import { Card, Tabs,message,Icon} from 'antd';

const TabPane = Tabs.TabPane;

class Itabs extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
          { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
          { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
        ];
        this.state = {
          activeKey: panes[0].key,
          panes,
        };
    }
    callback=(key)=>{
        message.info(`当前激活key值为${key}`);
    }
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
          activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }
    render() { 
        return ( 
            <div>
                <Card title="Tabs切换效果">
                    <Tabs onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">第一页</TabPane>
                        <TabPane tab="Tab 2" key="2">第二页</TabPane>
                        <TabPane tab="Tab 3" key="3">第三页</TabPane>
                    </Tabs>
                </Card>
                <Card title="带图标的Tabs">
                    <Tabs onChange={this.callback}>
                        <TabPane tab={<span><Icon type="alipay-circle" />Tab 1</span>} key="1">第一页</TabPane>
                        <TabPane tab={<span><Icon type="wechat" />Tab 2</span>} key="2">第二页</TabPane>
                        <TabPane tab={<span><Icon type="ant-design" />Tab 3</span>} key="3">第三页</TabPane>
                    </Tabs>
                </Card>
                <Card title="左右移动">
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="top"
                        style={{ height: 110 }}
                        onChange={this.callback}
                        >
                        <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                        <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                        <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                        <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                        <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                        <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                        <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
                        <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
                        <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
                        <TabPane tab="Tab 12" key="12">Content of tab 12</TabPane>
                    </Tabs>
                </Card>
                <Card title="可增删标签">
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
                    </Tabs>
                </Card>
            </div>
         );
    }
}
 
export default Itabs;