"use client";

import { Button, Checkbox, Col, Form, Input, Row } from "antd";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { Icon } from "@/components";
import styles from "./page.module.scss";

const Login: React.FC = () => {
  const router = useRouter();

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    router.push("/admin/user");
  };

  return (
    <div className={styles.login}>
      <Row className={styles.login_box}>
        <Col sm={12} md={15}>
          <div className={styles.login_left}>
            <Image
              src="/admin.svg"
              alt="登录主图"
              width={0}
              height={380}
              style={{ width: "100%" }}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} md={9}>
          <div className={styles.login_right}>
            <Form form={form} onFinish={onFinish} style={{ width: "80%" }}>
              <h3 className={styles.login_form_title}>
                <Image
                  className={styles.logo}
                  src="/logo.gif"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <span className={styles.name}>ADMIN</span>
              </h3>
              <Form.Item name="username" rules={[{ required: true, message: '请输入账号' }]}>
                <Input placeholder="账号" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                <Input
                  placeholder="密码"
                  type="password"
                  style={{ width: "100%" }}
                />
              </Form.Item>
              <Form.Item>
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ width: "100%", height: 36 }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
