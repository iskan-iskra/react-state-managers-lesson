import { appDoubleComponent } from "@/hoc";
import { AppTodoWithContext } from "@/widjets";
import { Container } from "react-bootstrap";

const AppTodoWithContextDoubled = appDoubleComponent(AppTodoWithContext);

export const AppContextPage = () => {
  return (
    <Container className="pb-4">
      <AppTodoWithContextDoubled />
    </Container>
  );
};
