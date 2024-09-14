import { memo, useCallback } from "react";
import PropTypes from "prop-types";
import { Badge, ListGroup } from "react-bootstrap";
import { AppTodoItem } from "./AppTodoItem";

const AppTodoListCore = ({ todoList, changeTodoStatus, deleteTodo }) => {
  const changeTodoStatusHandler = useCallback(
    (id) => () => changeTodoStatus(id),
    [changeTodoStatus]
  );

  const deleteTodoHandler = useCallback(
    (id) => () => deleteTodo(id),
    [deleteTodo]
  );

  if (todoList.length) {
    return (
      <ListGroup>
        {todoList.map(({ id, title, status }) => (
          <AppTodoItem
            key={id}
            todoId={id}
            todoTitle={title}
            todoStatus={status}
            changeTodoStatusHandler={changeTodoStatusHandler(id)}
            deleteTodoHandler={deleteTodoHandler(id)}
          />
        ))}
      </ListGroup>
    );
  } else {
    return (
      <h4 className="text-center">
        <Badge bg="secondary">Empty</Badge>
      </h4>
    );
  }
};

AppTodoListCore.propTypes = {
  todoList: PropTypes.array,
  changeTodoStatus: PropTypes.func,
  deleteTodo: PropTypes.func,
};

export const AppTodoList = memo(AppTodoListCore);
