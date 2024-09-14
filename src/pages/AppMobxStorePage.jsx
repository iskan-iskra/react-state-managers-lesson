import { appDoubleComponent } from "@/hoc";
import { AppTodoWithMobx } from "@/widjets";
import { Container } from "react-bootstrap";

const AppTodoWithMobxDoubled = appDoubleComponent(AppTodoWithMobx);

export const AppMobxStorePage = () => {
  return (
    <Container className="pb-4">
      <AppTodoWithMobxDoubled />
    </Container>
  );
};
