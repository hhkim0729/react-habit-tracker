import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const handleAdd = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
  };
  return (
    <form className="add-form" onSubmit={handleAdd}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button" type="submit">
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;
