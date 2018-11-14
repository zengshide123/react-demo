import React, { Component } from 'react';
import './index.less';
import { Card ,Carousel } from 'antd';


class Icarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Card
                    title="文字自动轮播"
                    className="carousel_wrap"
                >
                    <Carousel 
                        autoplay
                        effect="fade"
                    >
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card>
                <Card
                    title="图片自动轮播(渐变)"
                    className="carousel_wrap1"
                >
                    <Carousel 
                        autoplay
                        effect="fade"
                    >
                        <div><img src="/assets/carousel-img/carousel-1.jpg" alt="pic"/></div>
                        <div><img src="/assets/carousel-img/carousel-2.jpg" alt="pic"/></div>
                        <div><img src="/assets/carousel-img/carousel-3.jpg" alt="pic"/></div>
                    </Carousel>
                </Card>
                <Card
                    title="图片自动轮播(位移)"
                    className="carousel_wrap1"
                >
                    <Carousel 
                        autoplay
                        effect="scrollx"
                    >
                        <div><img src="/assets/carousel-img/carousel-1.jpg" alt="pic"/></div>
                        <div><img src="/assets/carousel-img/carousel-2.jpg" alt="pic"/></div>
                        <div><img src="/assets/carousel-img/carousel-3.jpg" alt="pic"/></div>
                    </Carousel>
                </Card>
            </div>
         );
    }
}
 
export default Icarousel;