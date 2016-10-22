import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
            'React 已经成功的运行了 ' + seconds + ' 秒了。';

        return React.DOM.p(null, message);
    }
}
//疑惑react.render与reactDOM.render区别，按理说我引入react-dom包之后应该使用的是reactDOM啊。怎么打印出a.default.render is no a function。然后我猜想是reactDOM.render用错了，结果还真是，待解决！！！
//疑惑nvm下载的node打不开而且十分的小
