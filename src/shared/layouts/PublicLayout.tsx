import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import Sidebar from '../components/Sidebar';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import TopHeader from '../components/TopHeader';
import { useAppSelector } from '../../redux/hooks';
import { ENTRY_ROUTE } from '../../common/constants';

const { Header, Content, Footer, Sider } = Layout;

const PublicLayout: React.FC = () => {
    const user = useAppSelector((state) => state.auth.user)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(user)

    React.useEffect(() => {
        if (user) {
            navigate(ENTRY_ROUTE)
        }
    }, [navigate, user])
    return (


        <Layout style={{ minHeight: "100vh" }}>
            <Layout>
                <Content style={{ margin: '24px 16px 0' }}>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Developers Lobby © 2022</Footer>
            </Layout>
        </Layout>
    )
}


export default PublicLayout;