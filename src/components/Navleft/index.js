import React, { Component } from 'react';
import Menuconfig from '../../config/menuConfig';
import './index.less';
import { Menu} from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuTreeNode:[]
         };
        this.render = this.render.bind(this);
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        let menuTreeNode = this.renderMenu(Menuconfig);
        this.setState({ menuTreeNode});
    }
    renderMenu(data){
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )               
            }else{
                return <Menu.Item title={item.title} key={item.key}>
                 {<Link to={item.key}>{item.title}</Link>}
                 </Menu.Item>
            }
        })
    }
    render() { 
        return ( 
            <div>
                <div className="navleft_logo">
                   <img src="/assets/logo-ant.svg" alt="logo"/>
                   <h1>personal ZQ</h1>
                </div>
                <Menu theme="dark" mode="vertical">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}
 
export default NavLeft;