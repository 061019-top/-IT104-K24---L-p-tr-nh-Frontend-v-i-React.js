import React, { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastDemo: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <ToastContainer position="middle-center">
      <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
        <Toast.Header>
          <strong className="me-auto">Cảnh báo</strong>
        </Toast.Header>
        <Toast.Body>Lỗi kết nối máy chủ.</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastDemo;
