import React, { Component } from 'react';
import './index.less';
import { Card, Form,Modal,message, Input, Icon, Radio, InputNumber, Select, Switch,DatePicker, TimePicker, Upload, Checkbox, Button } from 'antd';
import moment from 'moment';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

   const {Item} = Form;
   const { TextArea } = Input;
class Freg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
              uid: '-1',
              name: 'xxx.png',
              status: 'done',
              url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
          }
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        this.setState({
          previewImage: file.url || file.thumbUrl,
          previewVisible: true,
        });
      }
    handleChange = ({ fileList }) => this.setState({ fileList })    
    handleRegister=()=>{
        let userInfo = this.props.form.getFieldsValue();
            console.log(JSON.stringify(userInfo));
            this.props.form.validateFieldsAndScroll((err)=>{
                if(!err){
                    message.success(`${userInfo.userName} 注册成功`)
                }
            })
    }
    handleReset=()=>{
        this.props.form.resetFields()
    }
    handleCheck=(rule, value, callback) => {
        if (!value) {
            callback('必须选择才能注册!')
        }
        callback()
 }
    render() { 
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
              <Icon type="plus" />
              <div className="ant-upload-text">上传头像</div>
            </div>
          );
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return ( 
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <Item label="用户名"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </Item>
                        <Item label="密码"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('pwd',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input prefix={<Icon type="lock"/>} placeholder="请输入密码" type="password"/>
                                )
                            }
                        </Item>
                        <Item label="性别"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('sex',{
                                    initialValue:1,
                                    rules:[]
                                })(
                                   <Radio.Group>
                                       <Radio value={1}>男</Radio>
                                       <Radio value={2}>女</Radio>
                                   </Radio.Group>
                                )
                            }
                        </Item>
                        <Item label="年龄"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('age',{
                                    initialValue:18,
                                    rules:[]
                                })(
                                   <InputNumber/>
                                )
                            }
                        </Item>
                        <Item label="爱好"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('hobby',{
                                    initialValue:[1,4],
                                    rules:[]
                                })(
                                   <Select mode="multiple">
                                       <Select.Option value={1}>游泳</Select.Option>
                                       <Select.Option value={2}>打篮球</Select.Option>
                                       <Select.Option value={3}>踢足球</Select.Option>
                                       <Select.Option value={4}>跑步</Select.Option>
                                       <Select.Option value={5}>爬山</Select.Option>
                                   </Select>
                                )
                            }
                        </Item>
                        <Item label="当前状态"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('state',{
                                    initialValue:[1,4],
                                    rules:[]
                                })(
                                   <Select>
                                       <Select.Option value={1}>咸鱼一条</Select.Option>
                                       <Select.Option value={2}>风华浪子</Select.Option>
                                       <Select.Option value={3}>北大才子</Select.Option>
                                       <Select.Option value={4}>百度FE</Select.Option>
                                       <Select.Option value={5}>创业者</Select.Option>
                                   </Select>
                                )
                            }
                        </Item>
                        <Item label="是否已婚"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('isMarried',{
                                    valuePropName:"checked",
                                    initialValue:true,
                                    rules:[]
                                })(
                                   <Switch/>
                                )
                            }
                        </Item>
                        <Item label="出生日期"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('borthDay',{
                                    initialValue:moment('2018-01-01',"YYYY-MM-DD"),
                                    rules:[]
                                })(
                                   <DatePicker
                                    locale={locale}
                                   />
                                )
                            }
                        </Item>
                        <Item label="联系地址"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('address',{
                                    initialValue:'北京市海淀区',
                                    rules:[]
                                })(
                                   <TextArea
                                    autosize={{
                                            minRows: 2, 
                                            maxRows: 6
                                    }}
                                   />
                                )
                            }
                        </Item>
                        <Item label="早起时间"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('getUpTime',{
                                    initialValue:moment('09:08:23', 'HH:mm:ss'),
                                    rules:[]
                                })(
                                  <TimePicker/>
                                )
                            }
                        </Item>
                        <Item label="上传头像"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('upLoadAvatar',{
                                    rules:[]
                                })(
                                  <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                  >
                                    {fileList.length >= 3 ? null : uploadButton}  
                                  </Upload>
                                )
                            }
                        </Item>
                        <Item 
                            {...offsetLayout}
                        >
                            {
                                getFieldDecorator('protocol',{
                                    valuePropName:'checked',
                                    initialValue:false,                                    
                                    rules:[{
                                        required:true,
                                        validator:this.handleCheck
                                    }]
                                })(
                                    <Checkbox>
                                        我已阅读
                                        <a href="#"> 网站协议</a>
                                    </Checkbox>
                                )
                            }
                        </Item>
                        <Item 
                            {...offsetLayout}
                        >
                            {
                                getFieldDecorator('register',{
                                    rules:[]
                                })(
                                    <div>
                                        <Button type="primary" onClick={this.handleRegister}>注册</Button>
                                        <Button type="default" onClick={this.handleReset}>重置</Button>
                                    </div>
                                 
                                )
                            }
                        </Item>
                    </Form>
                </Card>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
         );
    }
}
 
export default Form.create()(Freg);