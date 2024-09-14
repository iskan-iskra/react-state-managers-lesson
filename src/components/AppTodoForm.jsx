import { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Button, Form, InputGroup } from "react-bootstrap";

const inputNewTodoTitle = "todo-title";

const AppTodoFormCore = ({
  createNewTodo,
  clearTodoList,
  isClearAvaliable,
}) => {
  const [validated, setValidated] = useState(false);

  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      const formEl = event.currentTarget;

      if (formEl.checkValidity()) {
        const formData = new FormData(formEl);

        const newTodoTitle = formData.get(inputNewTodoTitle);

        createNewTodo(newTodoTitle);

        formEl.reset();

        setValidated(false);
      } else {
        setValidated(true);
      }
    },
    [createNewTodo]
  );

  const keyDownHandler = useCallback((e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.requestSubmit();
    }
  }, []);

  const clearTodoListHandler = useCallback(
    () => clearTodoList(),
    [clearTodoList]
  );

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={submitHandler}
      onKeyDown={keyDownHandler}
    >
      <Form.Group className="mb-3">
        <InputGroup hasValidation>
          <InputGroup.Text>Create Todo</InputGroup.Text>
          <Form.Control
            name={inputNewTodoTitle}
            placeholder="new todo title"
            aria-describedby="inputGroupPrepend"
            autoComplete="off"
            autoCorrect="off"
            required
          />

          <Button variant="outline-primary me-1" type="submit">
            create
          </Button>
          <Button
            disabled={!isClearAvaliable}
            variant="outline-danger"
            onClick={clearTodoListHandler}
          >
            clear
          </Button>

          <Form.Control.Feedback type="invalid">
            Please enter title.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};

AppTodoFormCore.propTypes = {
  createNewTodo: PropTypes.func,
  clearTodoList: PropTypes.func,
  isClearAvaliable: PropTypes.bool,
};

export const AppTodoForm = memo(AppTodoFormCore);
