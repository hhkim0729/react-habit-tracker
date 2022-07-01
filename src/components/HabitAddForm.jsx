import React, { Component } from 'react';

export default class HabitAddForm extends Component {
  inputRef = React.createRef();

  handleAdd = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.handleAdd}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button" type="submit">
          Add
        </button>
      </form>
    );
  }
}
