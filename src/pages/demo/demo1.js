import React, { Component } from 'react';
class Demo1 extends Component {
    state = {  }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        console.log('子组件1 willmount');
    }
    componentDidMount() {
        console.log('子组件1 didmount');
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        console.log('子组件1 will receive props');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('子组件1 shouldupdate');
        return true
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        console.log('子组件1 willupdate');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('子组件1 didupdate');
    }
    render() { 
        return ( 
            <div>
                <h3>子组件1{this.props.count}</h3>
            </div>
         );
    }
}
 
export default Demo1;