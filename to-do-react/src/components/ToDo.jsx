import React from "react";

const ToDo = ({ todo }) => {
  return (
    <div className="to-do">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className="completar">Completar</button>
        <button className="deletar">Deletar</button>
      </div>
    </div>
  );
};

export default ToDo;
