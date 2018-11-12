import React, { Component } from 'react';
import './index.less';
import { Row ,Col } from 'antd';
import Utils from '../../utils';
import Api from '../../Api';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'天天',
            time:'2018-11-12',
            weather:{
                city:'上海',
                status:'好大的风'
            }
         };
         this.timer = null ;
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.getWeather()
    }
    componentDidMount() {
        this.timer = setInterval(()=>{
            let currentTime = Date.now();
            let  time = Utils.formateDate(currentTime); 
            this.setState({ time });        
        },500)
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    async getWeather(){
        let weather_data = await Api.Jsonp('https://restapi.amap.com/v3/weather/weatherInfo?key=7d6cda468c1b98b29c202be087b73f7a&city=110000&extensions=base');
        let {city,weather} = weather_data.lives[0];
        this.setState({
            weather:{
                status:weather,
                city
            }
        });
    }
    render() { 
        return ( 
            <div className="header_wrap">
                <Row className="header_top">
                    <Col span="24">
                        <span> 欢迎, {this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="header_breadcrumb">
                    <Col span="4" className="header_title">
                        首页
                    </Col>
                    <Col span="20" className="header_time_weather">
                        <span className="header_time">{this.state.time}</span>
                        <span className="header_weather">{this.state.weather.city} {this.state.weather.status}</span>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Header;