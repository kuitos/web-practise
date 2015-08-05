/**
 * @author Kuitos
 * @since 2015/04/08 下午7:36
 */
;
(function (React) {
    "use strict";

    var num = "s";

    React.render(
        <div>
            <h1>Hello, world!</h1>
        </div>,

        document.getElementById('example')
    );

    var array = [
        <h1>Example 2</h1>,
        <h2>Hello World</h2>
    ];

    React.render(
        <div>{array}</div>,
        document.getElementById("example2")
    );

    var HelloWorldComponent = React.createClass({
        render: function () {
            return <div>React Component {this.props.author}</div>;
        }
    });

    React.render(
        <HelloWorldComponent author="Kuitos"/>,
        document.getElementById("hello")
    );

    // components generator
    var List = React.createClass({
        render: function () {
            return (
                <ol>
                    {
                        this.props.children.map(function (child) {
                            return <li>{child}</li>
                        })
                    }
                </ol>
            );
        }
    });



    // handle click
    var counter = 0;
    var Button = React.createClass({

        getInitialState: function () {

            return {name: 0};

        },

        handleClick: function () {
            //this.state.name = counter++;
            this.setState({name:counter++});
        },

        render: function () {

            return (
                <div>
                    <input type="text" ref="input1" value={this.state.name}/>
                    <input type="button" value="counter" onClick={this.handleClick}/>
                </div>
            );

        }
    });

    React.render(
        <Button />,
        document.getElementById("button")
    );

    React.render(
        <List>
            <a href="#">百度</a>
            <a href="#">谷歌</a>
            <Button />
        </List>,
        document.getElementById("example3")
    );

    // state
    var Toggle = React.createClass({

        getInitialState: function () {
            return {liked: false};
        },

        handleClick: function (event) {
            this.setState({liked: !this.state.liked});
        },

        render: function () {

            var text = this.state.liked ? "like" : "unlike";

            return (
                <p onClick={this.handleClick}>
                    U {text} this.
                    {counter}
                </p>
            );
        }
    });

    React.render(
        <Toggle />,
        document.getElementById("button1")
    );

    // data bind
    var Input = React.createClass({

        getInitialState: function () {
            return {firstName: "Kuitos", lastName: "Lau"};
        },

        handleChange: function (event) {
            this.setState({firstName: event.target.value});
        },

        componentWillMount: function () {
            console.log("dom will be insert", this.state.firstName);
        },

        componentDidMount: function () {
            console.log("dom had be insert", this.state.firstName);
        },

        componentWillUpdate: function (nextProps, nextState) {
            console.log("dom will be update", nextProps, nextState);
        },

        componentDidUpdate: function (prevProps, prevState) {
            console.log("dom had be update", prevProps, prevState);
        },

        componentWillUnmount: function () {
            console.log("dom unmount");
        },

        render: function () {

            var state = this.state;

            return (
                <div>
                    <p>{state.firstName} {state.lastName}</p>
                    <input type="text" value={state.firstName} author={state.firstName} onChange={this.handleChange}/>
                </div>
            );
        }
    });

    React.render(
        <Input/>,
        document.getElementById("inputDataBind")
    );

})(window.React);
