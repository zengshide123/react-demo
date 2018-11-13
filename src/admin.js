import React, { Component } from 'react';
import './style/common.less';
import { Row ,Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/Navleft';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (            
               <Row className="admin_wrap">
                     <Col span="3" className="admin_navleft">
                        <NavLeft/>
                     </Col>   
                     <Col span="21" className="admin_main">
                        <Header/>
                        <div className="admin_scroll_wrap">
                            <Row className="admin_content">
                                <div className="admin_content_wrap">
                                    {this.props.children}
                                </div>
                            </Row>
                            <Footer/>
                        </div>
                     </Col>   
               </Row>        
         );
    }
}
 
export default Admin;