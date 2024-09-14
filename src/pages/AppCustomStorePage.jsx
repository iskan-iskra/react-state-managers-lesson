import { appDoubleComponent } from "@/hoc";
import { AppTodoWithStore } from "@/widjets";
import { Container } from "react-bootstrap";

const AppTodoWithStoreDoubled = appDoubleComponent(AppTodoWithStore);

export const AppCustomStorePage = () => {
  return (
    <Container className="pb-4">
      <AppTodoWithStoreDoubled />
    </Container>
  );
};
