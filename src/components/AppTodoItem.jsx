import { memo } from "react";
import PropTypes from "prop-types";
import { Button, ListGroupItem, Stack } from "react-bootstrap";

const AppTodoItemCore = ({
  todoId,
  todoTitle,
  todoStatus,
  changeTodoStatusHandler,
  deleteTodoHandler,
  ...rest
}) => (
  <ListGroupItem {...rest}>
    <Stack direction="horizontal" gap="3">
      <Stack direction="horizontal" gap="3" className="me-auto">
        <div style={{ width: "50px" }} className="text-center">
          <span>Id: </span>
          <span>{todoId}</span>
        </div>
        <div className="vr"></div>
        <div>
          <span>Title: </span>
          <span>{todoTitle}</span>
        </div>
      </Stack>
      <Button
        size="sm"
        variant={todoStatus ? "success" : "warning"}
        onClick={changeTodoStatusHandler}
      >
        {todoStatus ? "Done" : "Todo"}
      </Button>
      <Button size="sm" variant="outline-danger" onClick={deleteTodoHandler}>
        delete
      </Button>
    </Stack>
  </ListGroupItem>
);

AppTodoItemCore.propTypes = {
  todoTitle: PropTypes.string,
  todoId: PropTypes.number,
  todoStatus: PropTypes.bool,
  changeTodoStatusHandler: PropTypes.func,
  deleteTodoHandler: PropTypes.func,
};

export const AppTodoItem = memo(AppTodoItemCore);
