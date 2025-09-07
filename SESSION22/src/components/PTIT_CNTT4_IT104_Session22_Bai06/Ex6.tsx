import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerDemo: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" variant="secondary" />
      <Spinner animation="border" variant="success" />
    </div>
  );
};

export default SpinnerDemo;
