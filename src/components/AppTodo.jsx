import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import { AppTodoForm } from "./AppTodoForm";
import { AppTodoList } from "./AppTodoList";

const AppTodoCore = ({
  title,
  todoList,
  addNewTodoHandler,
  changeTodoHandler,
  deleteTodoHandler,
  clearTodoListHandler,
}) => {
  const todoListForRender = useMemo(() => [...todoList].reverse(), [todoList]);

  return (
    <>
      <div className="sticky-top bg-body">
        <h1 className="text-center">{title}</h1>
        <hr />
        <AppTodoForm
          createNewTodo={addNewTodoHandler}
          clearTodoList={clearTodoListHandler}
          isClearAvaliable={!!todoList.length}
        />
        <hr />
      </div>

      <AppTodoList
        todoList={todoListForRender}
        changeTodoStatus={changeTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
    </>
  );
};

AppTodoCore.propTypes = {
  title: PropTypes.string,
  todoList: PropTypes.array,
  addNewTodoHandler: PropTypes.func,
  changeTodoHandler: PropTypes.func,
  deleteTodoHandler: PropTypes.func,
  clearTodoListHandler: PropTypes.func,
};

export const AppTodo = memo(AppTodoCore);
