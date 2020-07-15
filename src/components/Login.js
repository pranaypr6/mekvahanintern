import React, { useState, useContext } from "react";
import { Form, Input, Button, Checkbox, Alert, Spin } from "antd";
import Axios from "axios";
import { Redirect } from "@reach/router";
import UserContext from "../context/UserContext";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const context = useContext(UserContext);
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //Redirect user
  const onLogin = () => {
    if (context.user !== 0) {
      return <Redirect to="/" noThrow />;
    }
  };

  //Fetching data from API
  const fetchApi = async () => {
    setError(false);
    setLoading(true);
    await Axios.post("https://mekvahan.com/api/android_intern_task", {
      mobile: mobileNumber,
      password: password,
    })
      .then((res) => {
        const data = res.data;
        if (data.status) {
          console.log(data.status);
          context.setUser(mobileNumber);
        } else {
          setError(true);
        }
      })
      .catch((err) => setError(true));

    setLoading(false);
  };

  const onSubmit = () => {
    fetchApi();
  };

  return (
    <div className="wrapper">
      {onLogin()}
      <div className="rowOne"></div>
      <div className="rowTwo">
        <h1 style={{ color: "#ff4d4f" }}>
          <img src={require("../assets/logo.svg")} className="logo" alt="" />
          MEKVAHAN
        </h1>
        {loading && <Spin tip="Fetching"></Spin>}
        {error && (
          <Alert message="error" type="error" style={{ width: "20em" }} />
        )}
        <Form
          className="loginForm"
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Mobile "
            name="mobilenumber"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="10 digit Mobile Number"
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="danger" htmlType="submit" onClick={onSubmit}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
