import React from "react";

class Counter extends React.Component {
    render() {
        return (
            <div className="Counter">
                <span className="Counter__value">0</span>
                <div className="Counter__control">
                    <button type="button">Increase</button>
                    <button type="button">Decrease</button>
                </div>
            </div>
        );
    }
}

export default Counter;