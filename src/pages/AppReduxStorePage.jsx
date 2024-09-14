import { appDoubleComponent } from "@/hoc";
import { AppTodoWithRedux } from "@/widjets";
import { Container } from "react-bootstrap";

const AppTodoWithReduxDoubled = appDoubleComponent(AppTodoWithRedux);

export const AppReduxStorePage = () => {
  return (
    <Container className="pb-4">
      <AppTodoWithReduxDoubled />
    </Container>
  );
};
