import React, {Component} from "react";
import Controls from "./Controls";

class Counter extends Component {
    static defaultProps = {
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                value: prevState.value + 1,
            };
        });
    };

    handleDecrement = () => {
        this.setState(prevState => ({
            value: prevState.value - 1,
        }));
        console.log("Decrease");
        console.log(this);
    };

    render() {
        const { value } = this.state;
        return (
            <div className="Counter">
                <span className="Counter__value">{value}</span>
                <Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement}/>
            </div>
        );
    };
};


export default Counter;