import React, { Component } from 'react';
class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        console.log('子组件2 will mount');
    }
    componentDidMount() {
        console.log('子组件2 didmount');
    }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        console.log('子组件2 will receive props');
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    componentWillUpdate(nextProps, nextState) {
        console.log('子组件2 willupdate');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('子组件2 didupdate');
    }
    componentWillUnmount() {
        console.log('子组件2 unmount');
    }
    render() { 
        return ( 
            <div>
                <h3>子组件2{this.props.count}</h3>
            </div>
         );
    }
}
 
export default Demo2;