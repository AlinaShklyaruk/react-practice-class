import React from "react";
import css from "./ColorPicker.module.css";

const ColorPicker = ({ options }) => (
    <div className={css.ColorPicker}>
        <h2 className={css.ColorPicker__title}>Color Picker</h2>
        <div>
            {options.map(({ label, color }) => (
                <span key={label} className={css.ColorPicker__option} style={{ backgroundColor: color }}>
                </span>
            ))}
        </div>
    </div>
);

export default ColorPicker;