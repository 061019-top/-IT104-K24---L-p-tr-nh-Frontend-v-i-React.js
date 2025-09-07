import React from "react";
import"./Header.scss"
export default function Header() {
  return (
    <div className="fullPage">
      <div className="headerTodo">
        <h1>To Do List</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div className="bodyTodo">
        <p>
          Lorem ipsum dolor sit <i className="fa-solid fa-square-check"></i>
          <i className="fa-solid fa-trash"></i>
        </p>
        <p>
          Lorem ipsum dolor sit <i className="fa-solid fa-square-check"></i>
          <i className="fa-solid fa-trash"></i>
        </p>
        <p>Move done items at the end? &ensp; <i className="fa-solid fa-toggle-on"></i></p>
      </div>
      <div className="footerTodo">
        <p>Add the to do list</p>
        <input type="text"  placeholder="Thêm công việc"/>
        <button>ADD ITEMS</button>
      </div>
    </div>
  );
}
