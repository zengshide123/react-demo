import React, { Component } from 'react';
import './index.less';
import { Card, Button, Table,Form ,message,DatePicker, Select, Modal} from 'antd';
import Api from '../../Api';
import utils from '../../utils'

const FormItem = Form.Item;
const Option = Select.Option;

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataSource:[],
            pagination:{},
            orderConfirmVisible:false,
            orderInfo:{}
         }
    }
    componentDidMount() {
        this.requestList();
    }
    requestList = ()=>{
        Api.Ajax({
            url:'/order/list',
            loading:true
        }).then(res=>{
            // console.log(res);
            this.setState({ 
                dataSource:res.list,
                pagination:utils.pagination(res,()=>{})
             });
             
        })
    }
    handleOrderFinish = ()=>{
        Api.Ajax({
            url:'/order/ebike_info',
            params: {
                ID: 12345
              },
        }).then((res)=>{
            console.log(res);
             this.setState({ 
            orderConfirmVisible : true,
            orderInfo:res

         }); 
        })
      
    }
    handleCancle=()=>{
        this.setState({ 
            orderConfirmVisible : false
         });
    }
    handleFinsh=()=>{
        message.info('操作成功');
        this.setState({ 
            orderConfirmVisible : false
         });
    }
    render() { 
        const columns = [
            {
                title:'订单编号',
                dataIndex:'order_sn',
                key:'order_sn'
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn',
                key:'bike_sn'
            },
            {
                title:'用户名',
                dataIndex:'user_name',
                key:'user_name'
            },
            {
                title:'手机号',
                dataIndex:'mobile',
                key:'mobile'
            },
            {
                title:'里程',
                dataIndex:'distance',
                key:'distance'
            },
            {
                title:'行驶时长',
                dataIndex:'total_time',
                key:'total_time'
            },
            {
                title:'状态',
                dataIndex:'status',
                key:'status'
            },
            {
                title:'开始时间',
                dataIndex:'start_time',
                key:'start_time'
            },
            {
                title:'结束时间',
                dataIndex:'end_time',
                key:'end_time'
            },
            {
                title:'订单金额',
                dataIndex:'total_fee',
                key:'total_fee'
            },
            {
                title:'实付金额',
                dataIndex:'user_pay',
                key:'user_pay'
            }
        ]
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
        return ( 
            <div>
                <Card>
                    <FiterForm/>
                </Card>
                <Card style={{marginTop:10}}>
                    <Button type="primary" >订单详情</Button>
                    <Button type="primary" onClick={this.handleOrderFinish}>结束订单</Button>
                </Card>
                <div className="content-warp">
                    <Table
                      bordered
                      columns={columns}
                      dataSource={this.state.dataSource}
                      pagination={this.state.pagination}
                    />
                </div>
                <Modal
                    title="结束订单"
                    visible={this.state.orderConfirmVisible}
                    centered
                    onCancel={this.handleCancle}
                    onOk={this.handleFinsh}
                >
                    <Form>
                        <FormItem label="车辆编号" {...formItemLayout} className="formmargin">
                           {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label="剩余电量" {...formItemLayout} className="formmargin">
                            {this.state.orderInfo.battery+'%'} 
                        </FormItem>
                        <FormItem label="行程开始时间" {...formItemLayout} className="formmargin">
                            {this.state.orderInfo.start_time} 
                        </FormItem>
                        <FormItem label="当前位置" {...formItemLayout} className="formmargin">
                            {this.state.orderInfo.location}  
                        </FormItem>
                    </Form>
                </Modal>
            </div>
         );
    }
}
// 封装表格组件
class FiterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleSubmit = ()=>{

    }
    render() { 
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
          } = this.props.form;
        return ( 
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <FormItem label="城市">
                     {getFieldDecorator('city_id', {
                        })(
                       <Select
                            style={{width:100}}
                            placeholder="全部"
                       >
                            <Option value="">全部</Option>
                            <Option value="1">北京市</Option>
                            <Option value="2">天津市</Option>
                            <Option value="3">深圳市</Option>
                       </Select>
                    )}
                </FormItem>
                <FormItem label="订单开始时间">
                     {getFieldDecorator('order_start_time', {
                    })(
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                    )}
                </FormItem>
                <FormItem label="订单结束时间">
                     {getFieldDecorator('order_end_time', {
                    })(
                        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>
                    )}
                </FormItem>
                <FormItem label="订单状态">
                     {getFieldDecorator('status', {
                    })(
                        <Select
                            style={{width:80}}
                            placeholder="全部"
                        >
                            <Option value="">全部</Option>
                            <Option value="1">进行中</Option>
                            <Option value="2">结束行程</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary">确定</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
         );
    }
}
 FiterForm = Form.create()(FiterForm);

export default Order;