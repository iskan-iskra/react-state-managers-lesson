import { Col, Row } from "react-bootstrap";

export const appDoubleComponent = (WrappedComponent) => {
  return function AppDobuledCompnent() {
    return (
      <Row>
        <Col xs="12" lg="6">
          <WrappedComponent />
        </Col>
        <Col xs="12" lg="6">
          <WrappedComponent />
        </Col>
      </Row>
    );
  };
};
