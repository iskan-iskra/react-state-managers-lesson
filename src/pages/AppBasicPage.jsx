import { appDoubleComponent } from "@/hoc";
import { AppTodoWithBasic } from "@/widjets";
import { Container } from "react-bootstrap";

const AppTodoWithBasicDoubled = appDoubleComponent(AppTodoWithBasic);

export const AppBasicPage = () => {
  return (
    <Container className="pb-4">
      <AppTodoWithBasicDoubled />
    </Container>
  );
};
