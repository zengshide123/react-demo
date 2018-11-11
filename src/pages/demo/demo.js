import React, { Component } from 'react';
import Demo1 from './demo1';
import Demo2 from './demo2';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:1,
            count1:1,
            count2:1,
         }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        console.log('父组件初始化 willmount');
    }
    componentDidMount(){
        console.log('父组件初始化完成 didmount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('父组件是否update');
        return true
    }
    componentWillUpdate(){
        console.log('父组件 willupdate');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('父组件 didupdate');
    }
    handleClick=()=>{
        this.setState({ count:this.state.count+1});
    }
    handleClick1=()=>{
        this.setState({ count1:this.state.count1+1});
    }
    handleClick2=()=>{
        this.setState({ count2:this.state.count2+1});
    }
    render() { 
        return ( 
            <div>
                <h3 onClick={this.handleClick}>点击控制父组件{this.state.count}</h3>
                <h3 onClick={this.handleClick1}>点击控制子组件一号</h3>
                <h3 onClick={this.handleClick2}>点击控制子组件二号</h3>
                <Demo1 count={this.state.count1}/>
                <Demo2 count={this.state.count2}/>
            </div>
         );
    }
}
 
export default Demo;