import React, {Component} from "react";
import Counter from "components/Counter";
import Dropdown from "components/Dropdown";
import ColorPicker from "components/ColorPicker";
import ToDoList from "components/ToDoList";
import todos from "./todos.json";

const colorPickerOptions = [
   { label: 'red', color: '#F44336' },
   { label: 'green', color: '#4CAF50' },
   { label: 'blue', color: '#2196F3' },
   { label: 'grey', color: '#607D8B' },
   { label: 'pink', color: '#E91E63' },
   { label: 'indigo', color: '#3F51B5' },
 ];

class App extends Component {
  state = {
    todos,
  };

  render() {
    const { todos } = this.state;
    return (
        <div>
    <h1>State</h1>
    <Counter initialValue={0} />
    <Dropdown />
    <ColorPicker options={colorPickerOptions} />
    <ToDoList todos={todos} />
  </div>
    );
  };
};

export default App;