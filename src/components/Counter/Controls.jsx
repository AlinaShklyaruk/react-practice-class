import React from "react";

const Controls = ({ onIncrement, onDecrement }) => (
    <div className="Counter__control">
        <button type="button" onClick={onIncrement}>Increase</button>
        <button type="button" onClick={onDecrement}>Decrease</button>
    </div>
);

export default Controls;