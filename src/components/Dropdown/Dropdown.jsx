import React from "react";
import css from "./Dropdown.module.css";

class Dropdown extends React.Component {

    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    };

   /* show = () => {
        this.setState({ visible: true });
    };

    hide = () => {
        this.setState({ visible: false });
    };*/

    render() {
        return (
            <div className={css.Dropdown}>
                <button type="button" className={css.Dropdown__toggle} onClick={this.toggle}>{this.state.visible ? "Hide" : "Show"}</button>
                {this.state.visible && (<div className={css.Dropdown__menu}>Menu</div>)}
            </div>
        );
    }
}

export default Dropdown;