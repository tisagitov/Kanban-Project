import React, { useState } from "react";
import AddButton from "./AddButton";

const AddTaskToOthers = ({ tasksToChoose, addTaskTo }) => {
  const [label, setLabel] = useState("");
  const [selected, setSelected] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setLabel(e.target.label);
    setSelected(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (selected !== "") {
      addTaskTo(selected);
      setShowForm(false);
      setSelected("");
    } else {
      document.querySelector(".add-task-dropdown").style.border =
        "2px solid red";
    }
  };

  return (
    <>
      {tasksToChoose && tasksToChoose.length > 0 ? (
        <form className="add-task-form" onSubmit={onSubmit}>
          {showForm && (
            <select
              label={label}
              value={selected}
              className="add-task-dropdown"
              onChange={handleChange}
              onFocus={() =>
                (document.querySelector(".add-task-dropdown").style.border =
                  "1px #0079bf solid")
              }
            >
              <option value="" default disabled>
                Select a task:
              </option>
              {tasksToChoose.map((task) => {
                return (
                  <option
                    key={task.id}
                    label={task.name}
                    value={task.id}
                    className="dropdown-option"
                  >
                    {task.name}
                  </option>
                );
              })}
            </select>
          )}
          <AddButton showForm={showForm} setShowForm={setShowForm} />
        </form>
      ) : (
        <button className="btn btn--no-cards">No cards to add yet</button>
      )}
    </>
  );
};

export default AddTaskToOthers;
