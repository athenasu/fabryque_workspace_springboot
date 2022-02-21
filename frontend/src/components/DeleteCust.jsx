import React from "react";

const DeleteCust = props => {
  const handleDelete = () => {
    props.onDelete(props.custid);
  };

  return (
    <td>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </td>
  );
};

export default DeleteCust;
