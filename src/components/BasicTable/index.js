import React, { Component } from 'react';
import './index.less';
import { Card, Table,Tag } from 'antd';
import Api from '../../Api';

class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.dataSource = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                hobby:'足球',
                bornDay:'2018-11-15',
                address:'北京市海淀区',
                key:'0'
            },
            {
                id:'1',
                userName:'Mock',
                sex:'0',
                state:'0',
                hobby:'篮球',
                bornDay:'2018-3-23',
                address:'上海市虹桥区',
                key:'1'
            },
            {
                id:'2',
                userName:'Browser',
                sex:'0',
                state:'1',
                hobby:'乒乓球',
                bornDay:'2017-8-01',
                address:'广州市天河区',
                key:'2'
            }
        ];
        this.state = { 
            dataSource:[],
            loading:true,
            dataSource1:[],
            loading1:true
         };
         this.timer = null;
    }
    async componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                dataSource : this.dataSource,
                loading:false
                });
        }, 1000);
         let dataSource1 = await Api.Ajax({url:'/tableList'})
            this.setState({ 
               loading1 : false,
               dataSource1
             });
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
    render() { 
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
            getCheckboxProps: record => {
                return ({
                            disabled: record.userName === 'disable name',
                            name: record.userName,
                        })
          }};
        const columns = [
            {
                title:'Id',
                dataIndex:'id',
                key:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName',
                key:'userName'
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render: text => text==="0"?(<Tag color="lime">在线</Tag>):(<Tag>离线</Tag>),
            },
            {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
                render: text => text==="0"?'男':'女',                
            },
            {
                title:'爱好',
                dataIndex:'hobby',
                key: 'hobby'               
            },
            {
                title:'生日',
                dataIndex:'bornDay',
                key: 'bornDay'                
            },
            {
                title:'地址',
                dataIndex:'address',
                key: 'address'                   
            }
        ];
        return ( 
            <div className="table_wrap">
                <Card title="基础表格">
                    <Table
                        dataSource={this.state.dataSource}
                        columns={columns}
                        loading={this.state.loading}
                        bordered
                        rowSelection={rowSelection}
                        pagination={false}
                    >
                    </Table>
                </Card>
                <Card title="表格动态渲染"
                    style={{marginTop:10}}
                >
                    <Table
                        dataSource={this.state.dataSource1}
                        columns={columns}
                        loading={this.state.loading}
                        bordered
                        rowSelection={rowSelection}
                        pagination={{
                            defaultPageSize:3
                        }}
                    >
                    </Table>
                </Card>
            </div>
         );
    }
}
 
export default BasicTable;
