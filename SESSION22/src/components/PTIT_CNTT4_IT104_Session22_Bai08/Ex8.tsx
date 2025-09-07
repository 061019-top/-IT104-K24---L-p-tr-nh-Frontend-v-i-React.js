import React from "react";
import { Form, Input, Button, Select, Typography } from "antd";

const { Title } = Typography;
const { Option } = Select;

const RegisterForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "24px" }}>
      <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
        Đăng ký tài khoản
      </Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <div style={{ display: "flex", gap: "16px" }}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
            style={{ flex: 1 }}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            style={{ flex: 1 }}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
        </div>

        <Form.Item
          name="fullName"
          label="Họ và tên"
          rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
        >
          <Input placeholder="Ví dụ: Nguyễn Văn A" />
        </Form.Item>

        <Form.Item
          name="address"
          label="Địa chỉ"
        >
          <Input placeholder="Ví dụ: Thanh Xuân, Hà Nội" />
        </Form.Item>

        <div style={{ display: "flex", gap: "16px" }}>
          <Form.Item
            name="city"
            label="Thành phố"
            style={{ flex: 1 }}
          >
            <Select placeholder="Chọn thành phố">
              <Option value="hanoi">Hà Nội</Option>
              <Option value="hcm">Hồ Chí Minh</Option>
              <Option value="danang">Đà Nẵng</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="district"
            label="Quận"
            style={{ flex: 1 }}
          >
            <Select placeholder="Chọn quận">
              <Option value="thanhxuan">Thanh Xuân</Option>
              <Option value="caugiay">Cầu Giấy</Option>
              <Option value="hadong">Hà Đông</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="zipcode"
            label="Mã bưu điện"
            style={{ flex: 1 }}
          >
            <Input placeholder="Nhập mã bưu điện" />
          </Form.Item>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterForm;

