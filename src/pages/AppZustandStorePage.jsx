import { appDoubleComponent } from "@/hoc";
import { AppTodoWithZustand } from "@/widjets";
import { Container } from "react-bootstrap";

const AppTodoWithZustandDoubled = appDoubleComponent(AppTodoWithZustand);

export const AppZustandStorePage = () => {
  return (
    <Container className="pb-4">
      <AppTodoWithZustandDoubled />
    </Container>
  );
};
