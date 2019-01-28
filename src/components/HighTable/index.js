import React, { Component } from 'react';
import './index.less';
import { Card, Table,Tag, Modal,message } from 'antd';
import Api from '../../Api';

class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataSource:[],
            dataSource2:[],
            loading:true,
            dataSource1:[],
            order:'ascend'
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
         let dataSource2 = await Api.Ajax({
             url:'/table-sort',
             loading:true
        })
            this.setState({ 
               loading : false,
               dataSource2:dataSource2.list
             });
    }
    handleSortChange = (pagination, filters, sorter)=>{
        console.log(pagination, filters, sorter);
        this.setState({ 
            order:sorter.order 
         });
    }
    handleClick = (record)=>{
        let id = record.id;
        console.log(record);
        Modal.confirm({
            title:'确认',
            content:`您确认删除  ${record.userName}  吗？`,
            onOk:()=>{
                let newDateSource = this.state.dataSource2.slice();
                newDateSource = newDateSource.filter(item=>item.id!==id);
                this.setState({ 
                    dataSource2: newDateSource
                 },()=>{
                    message.info(
                        '已成功删除'
                    )
                 });
            },
            onCancel:()=>{
                message.info(
                    '已取消操作'
                )
            }
        })

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
        const columns3 = [
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
                title:'年龄',
                dataIndex:'age',
                key: 'age',
                // width: 120               
            },
            {
                title:'地址',
                dataIndex:'address',
                key: 'address'            
            },
            {
                title:'操作',
                render:(text, record, index)=>{
                    return <a href="#" onClick={(ev)=>{ev.preventDefault();this.handleClick(record)}}>删除</a>
                }         
            }
        ];
        const columns2 = [
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
                title:'年龄',
                dataIndex:'age',
                key: 'age',
                sorter:(a,b)=>{
                    return a.age-b.age
                },
                defaultSortOrder: this.state.order,            
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
                fixed: 'left',
                width: 50
            },
            {
                title:'用户名',
                dataIndex:'userName',
                key:'userName',
                fixed: 'left',
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
                // width: 120               
            },
            {
                title:'地址',
                dataIndex:'address',
                key: 'address'            
            },
            {
                title:'地址1',
                dataIndex:'address1',
                key: 'address1'            
            },
            {
                title:'地址2',
                dataIndex:'address2',
                key: 'address2'            
            },
            {
                title:'地址3',
                dataIndex:'address3',
                key: 'address3'            
            },
            {
                title:'地址4',
                dataIndex:'address4',
                key: 'address4'            
            },
            {
                title:'早起时间',
                dataIndex:'MorningTime',
                key: 'MorningTime',
                fixed: 'right' ,
                width: 100         
            },
            {
                title:'休息时间',
                dataIndex:'eveningTime',
                key: 'eveningTime',
                fixed: 'right' ,
                width: 100           
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
                        // bordered
                        rowSelection={rowSelection}
                        pagination={false}
                        scroll={{ x: 3300}}
                    >
                    </Table>
                </Card>
                <Card title="表格排序">
                    <Table
                        dataSource={this.state.dataSource2}
                        columns={columns2}
                        bordered
                        rowSelection={rowSelection}
                        pagination={false}
                        onChange={this.handleSortChange}
                    >
                    </Table>
                </Card>
                <Card title="表格操作">
                    <Table
                        dataSource={this.state.dataSource2}
                        columns={columns3}
                        bordered
                        rowSelection={rowSelection}
                        pagination={false}
                        // onChange={this.handleSortChange}
                    >
                    </Table>
                </Card>
            </div>
         );
    }
}
 
export default BasicTable;
