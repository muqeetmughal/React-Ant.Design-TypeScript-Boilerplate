import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Sidebar from '../components/Sidebar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import { useAppSelector } from '../../redux/hooks';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout: React.FC = () => {
    const user = useAppSelector((state) => state.auth.user)

    console.log("user is : ", user)
    const location = useLocation()


    return (

        <>
            {user ?
                <Layout style={{ minHeight: "100vh" }}>
                    <Sidebar />
                    <Layout>
                        <TopHeader />
                        <Content style={{ margin: '24px 16px 0' }}>
                            <Outlet />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Developers Lobby © 2022</Footer>
                    </Layout>
                </Layout>

                : 
                
                <Navigate to="/auth/login" state={{ from: location }} />


            }
        </>


    )
}


export default MainLayout;