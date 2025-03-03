import React, { useState } from "react";
import {
  LockOutlined,
  MailOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { NavLink } from "react-router-dom";
import axios from "axios"; // استيراد axios

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // إضافة حالة للتحميل
  const [error, setError] = useState(null); // إضافة حالة للخطأ
  const key = "SANN_BOOKS";
  const onFinish = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(
        "https://books.sann-erp.com/api/auth/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${key}`,
          },
        }
      );
      console.log("Login successful:", response.data);
      setLoading(false);
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password. Please check your credentials.");
      } else {
        setError("An error occurred during login. Please try again later.");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 400,
        }}
        onFinish={onFinish}
        className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-300 w-3/4 "
      >
        <h2 className="text-2xl font-semibold mb-11 text-center ">Login</h2>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>
        <Form.Item className="w-full">
          <Button
            block
            type="primary"
            htmlType="submit"
            className="w-full"
            loading={loading} // إضافة حالة التحميل لزر
          >
            {loading ? "Logging in..." : "Log in"}{" "}
            {/* تغيير نص الزر أثناء التحميل */}
          </Button>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}{" "}
          {/* عرض رسالة الخطأ */}
          <div className="text-center mt-2">
            <p>
              Create an account <NavLink to="/register">Register</NavLink>
            </p>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
