import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text, Title, Link } = Typography;

function LoginPage({ onLoginSuccess }) {  
    const pw = "123456";
    const email = "admin@gmail.com";
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        onLoginSuccess(true);
        navigate("/board");
    };


    return (
        <div className="h-full flex justify-center">
            <section className="flex items-center h-screen py-0 md:py-10">
                <div className="mx-auto p-6 sm:p-10 bg-white shadow-md rounded-lg w-96">
                    <div className="mb-8 text-center">
                        <Title level={3} className="text-lg sm:text-2xl">Sign In</Title>
                        <Text className="text-gray-500">Welcome back MindX's Student! Please enter your details below to sign in.</Text>
                    </div>
                    <Form
                        name="normal_login"
                        initialValues={{ remember: true }}
                        layout="vertical"
                        requiredMark="optional"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: "Please input your Email!", validator: (rule, value, callback) => {
                                if (value !== email) {
                                    callback("Email is incorrect");
                                }
                                callback();
                            } }]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: "Please input your Password!", validator: (rule, value, callback) => {
                                if (value !== pw) {
                                    callback("Password is incorrect");
                                }
                                callback();
                            } }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a className="float-right text-blue-500" href="#">
                                Forgot password?
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button  type="primary" htmlType="submit" className="w-full">
                                Log in 
                            </Button>
                            <div className="mt-4 text-center">
                                <Text className="text-gray-500">Don't have an account?</Text>{" "}
                                <Link href="#" className="text-blue-500">Sign up now</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </div>
    );
}

export default LoginPage;