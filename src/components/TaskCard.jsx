// components/TaskCard.jsx
import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import todoIcon from "../assets/todo.png";
import workingIcon from "../assets/working.png";
import celebrationIcon from "../assets/celebration.png";

const TaskCard = ({ title, tags, handleDelete, handleStatusChange, index, status }) => {

  const renderStatusButtons = () => {
    switch (status) {
      case 'todo':
        return (
          <>
            <div className="task_button" onClick={() => handleStatusChange(index, 'doing')}>
              <img src={workingIcon} alt="working" />
            </div>
            <div className="task_button" onClick={() => handleStatusChange(index, 'done')}>
              <img src={celebrationIcon} alt="done" />
            </div>
          </>
        );
      case 'doing':
        return (
          <>
            <div className="task_button" onClick={() => handleStatusChange(index, 'todo')}>
              <img src={todoIcon} alt="todo" />
            </div>
            <div className="task_button" onClick={() => handleStatusChange(index, 'done')}>
              <img src={celebrationIcon} alt="done" />
            </div>
          </>
        );
      case 'done':
        return (
          <>
            <div className="task_button" onClick={() => handleStatusChange(index, 'doing')}>
              <img src={workingIcon} alt="working" />
            </div>
            <div className="task_button" onClick={() => handleStatusChange(index, 'todo')}>
              <img src={todoIcon} alt="todo" />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <article className="task_card">
      <p className="task_text">{title}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_buttons">
          {renderStatusButtons()}
          <div className="task_delete" onClick={() => handleDelete(index)}>
            <img src={deleteIcon} alt="delete" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
