import React, { Component } from 'react';
import './index.less';
import {Card ,Row,Col,Modal} from 'antd';

let {Meta} = Card;

class Igallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:false,
            src:'',
            title:''
         }
    }
    handleClick=(src,title)=>{
        this.setState({ src,
            show:true,
            title
        });
    }
    handleCancle=()=>{
        this.setState({ show:false  });
    }
    render() { 
        const imgs = [
            [1,2,3,4,5],
            [6,7,8,9,10],
            [11,12,13,14,15],
            [16,17,18,19,20],
            [21,22,23,24,25]
        ];
        const imgList = imgs.map(list=>list.map((item)=>
                <Card
                    cover={<img src={`/assets/gallery/${item}.png`}
                    alt={item}
                   />}
                   key={item}
                   className="garlly_card_wrap"
                   onClick={()=>{this.handleClick(`/assets/gallery/${item}.png`,`admin ${item} pic`)}}
                >
                    <Meta
                        title={`admin ${item} pic`}
                        description='beautiful picture'
                    />
                </Card>
            ))
        console.log(imgList);
        return ( 
            <div>
                <Row gutter={20}>
                    {imgList.map((list,index,arr)=>
                        <Col 
                            md={index===Array.length-1?4:5}
                            key={index}
                        >
                            {list}
                        </Col>
                        )}
                </Row>
                <Modal
                    footer={null}
                    visible={this.state.show}
                    width='80%'
                    style={{
                        top:10
                    }}
                    title={this.state.title}
                    onCancel={this.handleCancle}
                    bodyStyle={{'textAlign':'center',backgroundColor:'#eee'}}
                >
                    {<img src={this.state.src} alt="pic" style={{maxWidth:'100%'}}/> }
                </Modal>
            </div>
         );
    }
}
 
export default Igallery;