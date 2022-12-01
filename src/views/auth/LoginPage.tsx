import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const onFinish = async () => { };
  const onFinishFailed = async () => { };
  return (
    <>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

        <Typography.Title type='secondary' level={2}>{process.env.REACT_APP_NAME}</Typography.Title>
        <Form
          layout="vertical"
          name="login"
          // labelCol={{
          //     span: 4,
          // }}
          // wrapperCol={{
          //     span: 24,
          // }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
          // wrapperCol={{
          //     span: 4,
          // }}
          >
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>

      </div>

    </>
  );
};

export default LoginPage;

// import { Button, Form, Input, message } from 'antd';
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { setLoginCredentials, logOut } from '../redux/features/auth/authSlice'
// import AuthService from '../services/Auth.service';

// import { LockOutlined } from '@ant-design/icons';

// const LoginForm = () => {

//     const navigate = useNavigate()
//     const [loading, setLoading] = useState(false)
//     const dispatch = useDispatch()

//     const onFinish = async (values) => {
//         setLoading(true)

//         try {
//             const { data: { access, refresh, mfa_registered } } = await AuthService.login(values)

//             dispatch(setLoginCredentials({ access, refresh }))

//             if (mfa_registered){

//                 navigate("/auth/mfa")
//                 message.warning("Please Enter OTP from Authenticator App")
//             }else{
//                 navigate("/auth/register")
//                 message.warning("Please Register on Authenticator App")
//             }

//         } catch (err) {
//             dispatch(logOut())

//             if (err.response.data) {
//                 message.error(err.response.data.detail)
//             }
//             else {

//                 message.error("Unable to login check internet")
//             }
//         }
//         setLoading(false)
//     };

//     const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//     };

//     return (
//         <>

//             <Form
//                 layout='vertical'
//                 name="login"
//                 // labelCol={{
//                 //     span: 4,
//                 // }}
//                 // wrapperCol={{
//                 //     span: 24,
//                 // }}
//                 initialValues={{
//                     remember: true,
//                 }}
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//             >

//                 <Form.Item
//                     label="Email"
//                     name="email"
//                     rules={[
//                         {
//                             type: 'email',
//                             required: true,
//                             message: 'Please input your email!',
//                         },
//                     ]}
//                 >
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Password"
//                     name="password"
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                     ]}
//                 >
//                     <Input.Password />
//                 </Form.Item>

//                 <Form.Item
//                 // wrapperCol={{
//                 //     span: 4,
//                 // }}
//                 >
//                     <Button type="primary" htmlType="submit" block loading={loading}>
//                         <LockOutlined/>
//                         Login
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </>
//     );
// };

// export default LoginForm;
