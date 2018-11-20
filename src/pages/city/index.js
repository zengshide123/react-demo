import React, { Component } from 'react';   
import './index.less';
import Api from '../../Api';
import Utils from '../../utils';
import { Card, Form, Select, Button, Table, Tag, Modal,message } from 'antd';


const FormItem = Form.Item;
const Option = Select.Option;

class City extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            dataSource:[],
            paginationSettings:{},
            isShowOpenCity:false
         }
    }
    // 开通城市
    handleOpenCity=()=>{
        this.setState({ 
            isShowOpenCity:true
          });
    }
    // 弹框关闭
    handleModalCancel=()=>{
        this.setState({ 
            isShowOpenCity: false
         });
    }
    // 提交开通城市
  handleSubmit=()=>{
        let cityInfo = this.cityForm.props.form.getFieldsValue();
            console.log(cityInfo)
        Api.Ajax({
            url:'/push-open-city'
        }).then(res=>{
            message.success(res.mes,1.5)
        })
        this.setState({ isShowOpenCity: false });
    }
   componentDidMount() {
        this.sourceList();
    }
    // 默认请求接口数据
    sourceList = ()=>{
        Api.Ajax({
            url:'/open_city',
            loading:true
        }).then(res=>{
            this.setState({ 
                dataSource:res.list,
                paginationSettings:Utils.pagination(res,()=>{})
              });
        })
    }
    render() { 
        const columns = [
            {
              title:'城市ID' ,
              dataIndex:'id',
              key:'id'  
        },
            {
              title:'城市名称' ,
              dataIndex:'name',
              key:'name'  
        },
            {
              title:'用车模式' ,
              dataIndex:'mode',
              key:'mode',
              render:(text)=><span>{text===1?'指定停车点':'禁停区'}</span>  
        },
            {
              title:'营运模式' ,
              dataIndex:'op_mode',
              key:'op_mode',
              render:(text)=><span>{text===1?'自营':'加盟'}</span>  
        },
            {
              title:'授权加盟商' ,
              dataIndex:'franchinese_name',
              key:'franchinese_name'
        },
            {
              title:'城市管理员' ,
              dataIndex:'city_admins',
              key:'city_admins',
              render:(tags)=>tags.map((item)=><Tag key={item.user_id} color="lime" style={{marginTop:5}}>{item.user_name}</Tag>)
        },
            {
              title:'城市开通时间' ,
              dataIndex:'open_time',
              key:'open_time'
        },
            {
              title:'操作时间' ,
              dataIndex:'update_time',
              key:'update_time',
              render:(text)=>Utils.formateDate(text)
        },
            {
              title:'操作人' ,
              dataIndex:'sys_user_name',
              key:'sys_user_name'
        },
    ]
        return ( 
            <div>
                <Card>
                    <FilterForm/>
                </Card>
                <Card>
                    <Button type="primary" onClick={this.handleOpenCity}>开通城市</Button>
                </Card>
                <Table
                    columns={columns}
                    dataSource={this.state.dataSource}
                    style={{
                        marginTop:10
                    }}
                    bordered
                    pagination={this.state.paginationSettings}
                />
                <Modal
                    centered
                    visible={this.state.isShowOpenCity}
                    onCancel={this.handleModalCancel}
                    title="开通城市"
                    onOk={this.handleSubmit}
                >
                    <OpenCityForm wrappedComponentRef={(inst)=>{this.cityForm = inst}}/>
                </Modal>
            </div>
         );
    }
}

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {getFieldDecorator} = this.props.form;
        return ( 
            <Form layout="inline">
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                placeholder="全部"
                                style={{width:100}}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">北京市</Option>
                                <Option value="2">天津市</Option>
                                <Option value="3">深圳市</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="用车模式">
                    {
                        getFieldDecorator('mode')(
                            <Select
                                placeholder="全部"
                                style={{width:120}}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">指定停车点</Option>
                                <Option value="2">禁停区</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="营运模式">
                    {
                        getFieldDecorator('op_mode')(
                            <Select
                                placeholder="全部"
                                style={{width:80}}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">自营</Option>
                                <Option value="2">加盟</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem label="加盟商授权状态">
                    {
                        getFieldDecorator('auth_status')(
                            <Select
                                placeholder="全部"
                                style={{width:100}}
                            >
                                <Option value="">全部</Option>
                                <Option value="1">已授权</Option>
                                <Option value="2">未授权</Option>
                            </Select>
                        )
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}}>查询</Button>
                    <Button type="default">重置</Button>
                </FormItem>
            </Form>
         );
    }
}
 
    FilterForm = Form.create({})(FilterForm);

class OpenCityForm extends Component {
    state = {  }
    render() { 
        const formItemLayout = {
            labelCol:{span: 3, offset: 4},
            wrapperCol:{span: 10, offset: 1}
        }
        const {getFieldDecorator} = this.props.form
        return ( 
            <Form layout="horizontal">
                <FormItem label="选择城市" {...formItemLayout}>
                    {
                        getFieldDecorator('city_id',{})(
                            <Select
                                placeholder="请选择"
                            >
                                <Option value="1">北京市</Option>
                                <Option  value="2">天津市</Option>
                            </Select>
                        )
                    }                 
                </FormItem>
                <FormItem label="营运模式" {...formItemLayout}>
                     {
                        getFieldDecorator('mode',{})(
                            <Select
                                placeholder="请选择"
                            >
                                <Option  value="1">自营</Option>
                                <Option  value="2">加盟</Option>
                            </Select>
                        )
                    } 
                </FormItem>
                <FormItem label="用车模式" {...formItemLayout}>
                    {
                        getFieldDecorator('op_mode',{})(
                            <Select
                                placeholder="请选择" 
                            >
                                <Option  value="1">指定停车点</Option>
                                <Option  value="2">禁停区</Option>
                            </Select>
                        )
                    } 
                </FormItem>
            </Form>
         );
    }
}
 
 OpenCityForm = Form.create({})(OpenCityForm)
 
export default City;