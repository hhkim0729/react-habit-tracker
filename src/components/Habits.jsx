import React from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <div>
      <HabitAddForm onAdd={onAdd} />
      <ul className="habits">
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habit-reset" onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
