import React from "react";

const AddButtonBacklog = ({ showForm, setShowForm }) => {
  const onAdd = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <input type="submit" value="Submit" className="btn btn--submit" />
      ) : (
        <button className="btn" onClick={onAdd}>
          + Add card
        </button>
      )}
    </>
  );
};

export default AddButtonBacklog;
