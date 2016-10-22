import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: parseInt(props.initialCount)};
        //this.handleClick = this.handleClick.bind(this);
        this.handleClick = () => {
            this.setState({
                count: this.state.count + 1
            });
        };
    }

    //handleClick() {
    //    this.setState({
    //        count: this.state.count + 1,
    //    });
    //}
    render() {
        return (
            <button onClick={this.handleClick}>
                点我点我！！ 点击数: <em>{this.state.count}</em>
            </button>
        );
    }
}
//疑惑class按理说应该也是一个函数对象啊！为什么ES6的写法this指向不对
//见http://es6.ruanyifeng.com/#docs/class#this的指向
//解决方案如上两种，原来是我CLASS那里没理解透，尴尬
