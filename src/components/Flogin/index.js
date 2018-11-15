import React, { Component } from 'react';
import './index.less';
import { Card, Form, Input, Button ,message, Icon, Checkbox} from 'antd';

let {Item} = Form;

class Flogin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleSubmit=()=>{
        let userData = this.props.form.getFieldsValue();
            this.props.form.validateFields((err)=>{
                if(!err){
                   message.success(`${userData.userName} 登录成功`)    
                }else{

                }
            });
    }
    render() { 
        const {getFieldDecorator} = this.props.form;
        return ( 
            <div>
                <Card title="登录行内表单">
                    <Form 
                        layout="inline"
                    >
                        <Item>
                            <Input placeholder="请输入用户名"/>
                        </Item>
                        <Item>
                            <Input placeholder="请输入密码"/>
                        </Item>
                        <Item>
                            <Button type="primary">登录</Button>
                        </Item>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{marginTop:10}}>
                    <Form
                        style={{width:300}}
                    >
                        <Item
                            hasFeedback
                        >
                            {getFieldDecorator('userName',{
                                initialValue:'',
                                rules:[
                                    {
                                        required:true,
                                        message:'用户名不能为空'
                                    }
                                ]
                            })(<Input placeholder="请输入用户名" 
                                prefix={<Icon type="user"/>}
                            />)}
                        </Item>
                        <Item
                            hasFeedback
                        >
                            {getFieldDecorator('pwd',{
                                    initialValue:'123',
                                    rules:[{
                                        required:true,
                                        min:5,
                                        max:10,
                                        message:'长度必须在5-10之间'
                                    }]
                                })(<Input placeholder="请输入密码"
                                    type="password"
                                    prefix={<Icon type="lock"
                                    />}
                                />)}                          
                        </Item>
                        <Item>
                            {getFieldDecorator('remember',{
                                    valuePropName: 'checked',
                                    initialValue:true,
                                    rules:[]
                                })(<Checkbox>
                                    记住密码
                                </Checkbox>)}   
                                <a href="#" style={{float:'right'}}>忘记密码</a>                       
                        </Item>
                        <Item>
                            <Button type="primary" block onClick={this.handleSubmit}>登录</Button>
                        </Item>
                    </Form>
                </Card>
            </div>
         );
    }
}
 
export default Form.create()(Flogin);