import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: 3,
            c: -4
        };
        this.handleInputChange = (key, event) => {
            var partialState = {};
            partialState[key] = parseFloat(event.target.value);
            this.setState(partialState);
        }
    }

    render() {
        var a = this.state.a,
            b = this.state.b,
            c = this.state.c,
            root = Math.sqrt(Math.pow(b, 2) - 4 * a * c),
            denominator = 2 * a,
            x1 = (-b + root) / denominator,
            x2 = (-b - root) / denominator;
        return (
            <div>
                <strong>
                    <em>ax</em><sup>2</sup> + <em>bx</em> + <em>c</em> = 0
                </strong>
                <h4>计算 <em>x</em>:</h4>
                <p>
                    <label>
                        请更改ABC的值试一下：
                    </label>
                    <br />
                    <label>
                        a: <input type="number" value={a} onChange={this.handleInputChange.bind(null, 'a')}/>
                    </label>
                    <br />
                    <label>
                        b: <input type="number" value={b} onChange={this.handleInputChange.bind(null, 'b')}/>
                    </label>
                    <br />
                    <label>
                        c: <input type="number" value={c} onChange={this.handleInputChange.bind(null, 'c')}/>
                    </label>
                    <br />
                    得到x的值为: <strong>{x1}, {x2}</strong>
                </p>
            </div>
        );
    }
}

//React.createElement('h1', null,
//    "Hello, world!"
//)