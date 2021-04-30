import React from "react";

const AddButton = ({ showForm, setShowForm }) => {
  const onAdd = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {showForm ? (
        <input
          type="submit"
          value="Submit"
          onSubmit={onSubmit}
          className="btn btn--submit"
        />
      ) : (
        <button className="btn" onClick={onAdd}>
          + Add card
        </button>
      )}
    </>
  );
};

export default AddButton;
