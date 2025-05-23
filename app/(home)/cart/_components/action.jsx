import React from "react";

const Action = ({ remove, id, add, sub }) => {
  return (
    <div className="flex gap-3">
      <button onClick={() => add(id)}>+</button>
      <button onClick={() => sub(id)}>-</button>
      <button onClick={() => remove(id)}>Remove</button>
    </div>
  );
};

export default Action;
