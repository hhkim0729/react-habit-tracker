import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

export default class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul className="habits">
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}
