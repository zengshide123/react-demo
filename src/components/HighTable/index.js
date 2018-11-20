import React, { Component } from 'react';
import './index.less';
import { Card, Table,Tag } from 'antd';
import Api from '../../Api';

class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataSource:[],
            loading:true,
            dataSource1:[]
         };
    }
    async componentDidMount() {
         let dataSource = await Api.Ajax({
             url:'/table-pagination-list',
             loading:true
        })
            this.setState({ 
               loading : false,
               dataSource:dataSource.list
             });
         let dataSource1 = await Api.Ajax({
             url:'/mock-fixed-bar',
             loading:true
        })
            this.setState({ 
               loading : false,
               dataSource1:dataSource1.list
             });
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
                key:'id',
                width: 50
            },
            {
                title:'用户名',
                dataIndex:'userName',
                key:'userName',
                width: 80
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render: text => text==="0"?(<Tag color="lime">在线</Tag>):(<Tag>离线</Tag>),
                width: 81
            },
            {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
                render: text => text==="0"?'男':'女',
                width: 80          
            },
            {
                title:'爱好',
                dataIndex:'hobby',
                key: 'hobby',
                width: 80              
            },
            {
                title:'生日',
                dataIndex:'bornDay',
                key: 'bornDay',
                width: 120               
            },
            {
                title:'地址',
                dataIndex:'address',
                key: 'address'            
            }
        ];
        const columns1 = [
            {
                title:'Id',
                dataIndex:'id',
                key:'id',
                // width: 50
            },
            {
                title:'用户名',
                dataIndex:'userName',
                key:'userName',
                // width: 80
            },
            {
                title:'状态',
                dataIndex:'state',
                key:'state',
                render: text => text==="0"?(<Tag color="lime">在线</Tag>):(<Tag>离线</Tag>),
                // width: 81
            },
            {
                title:'性别',
                dataIndex:'sex',
                key:'sex',
                render: text => text==="0"?'男':'女',
                // width: 80          
            },
            {
                title:'爱好',
                dataIndex:'hobby',
                key: 'hobby',
                // width: 80              
            },
            {
                title:'生日',
                dataIndex:'bornDay',
                key: 'bornDay',
                // width: 120               
            },
            {
                title:'地址',
                dataIndex:'address',
                key: 'address'            
            },
            {
                title:'早起时间',
                dataIndex:'MorningTime',
                key: 'MorningTime'            
            },
            {
                title:'休息时间',
                dataIndex:'eveningTime',
                key: 'eveningTime'            
            }
        ];
        return ( 
            <div className="table_wrap">
                <Card title="表头固定">
                    <Table
                        dataSource={this.state.dataSource}
                        columns={columns}
                        // loading={this.state.loading}
                        bordered
                        rowSelection={rowSelection}
                        pagination={false}
                        scroll={{ y: 240 }}
                    >
                    </Table>
                </Card>
                <Card title="两侧固定">
                    <Table
                        dataSource={this.state.dataSource1}
                        columns={columns1}
                        bordered
                        rowSelection={rowSelection}
                        pagination={false}
                        // scroll={{ y: 240 }}
                    >
                    </Table>
                </Card>
            </div>
         );
    }
}
 
export default BasicTable;
