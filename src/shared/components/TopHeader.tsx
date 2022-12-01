import React from 'react';

import { Button, Row, Col, Layout, message, Badge, Avatar, Popover } from 'antd';
import {
    MenuFoldOutlined,
    PoweroffOutlined,
    MenuUnfoldOutlined,
    BellOutlined
} from '@ant-design/icons';
// import SettingsDrawer from '../components/SettingsDrawer';
// import AuthService from '../services/Auth.service';
import { toggleSidebar } from '../../redux/features/theme/uiSlice';

import Logo from '../components/Logo'
// import NotificationsCard from 'components/NotificationsCard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logOut } from '../../redux/features/auth/authSlice';
const { Header } = Layout
const TopHeader = () => {


    const { sidebarCollapsed, theme } = useAppSelector((state) => state.theme)

    const { user } = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch()

    function handleLogout() {
        dispatch(logOut());
        message.success("You have been logged out successfully!")


    }

    const styles = {
        padding: 0,
        color: "black",
        background : "white"
        
        // position: 'fixed',
        // zIndex: 1,
        // width: '100%',

        // background: "white"

    }
    return (
        <>
            <Header style={styles}>

                <Row justify="space-between">
                    <Col>

                        <div style={{ fontSize: "20px", padding: "0px 10px", display: "flex", alignItems: "center" }}>
                            {
                                user ?
                                    sidebarCollapsed ? <MenuUnfoldOutlined className='trigger' onClick={() => dispatch(toggleSidebar())} /> : <MenuFoldOutlined className='trigger' onClick={() => dispatch(toggleSidebar())} />
                                    : ""
                            }
                            <Logo />
                        </div>


                        {/* </Col>

                    <Col > */}

                    </Col>



                    <Col>

                        {/* <Badge count={10}>

                            <Popover placement="bottom" title={"Notifications"} content={<NotificationsCard />} trigger="click">
                                <Button icon={<BellOutlined style={{ fontSize: "20px" }} />} type="link" />
                            </Popover>

                        </Badge> */}

                        {
                            user ?
                                <Button
                                    type="link"
                                    size='large'
                                    icon={<PoweroffOutlined style={{ fontSize: "20px" }} />}
                                    onClick={handleLogout}
                                >
                                </Button>
                                : ""
                        }

                    </Col>
                </Row>


            </Header>
        </>
    )
}

export default TopHeader