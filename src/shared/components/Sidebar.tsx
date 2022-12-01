

import React, { FC, useEffect, useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSidebar } from '../../redux/features/theme/uiSlice';
import navitems from '../../config/NavMenu';

const { Header, Content, Footer, Sider } = Layout;

const Sidebar: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    let location = useLocation();


    const { user } = useAppSelector((state) => state.auth)
    const { sidebarCollapsed, theme } = useAppSelector((state) => state.theme)
    const [currentPath, setCurrentPath] = useState<string>(location.pathname)

    const [sidebar_nav_items, set_sidebar_nav_items] = useState([])



    // useEffect(() => {



    //     set_sidebar_nav_items(filterNavItems(user, navitems))




    // }, [dispatch, user])


    useEffect(() => {
        if (location) {
            if (currentPath !== location.pathname) {
                setCurrentPath(location.pathname);
            }
        }
    }, [location, currentPath]);



    function handleClick(e: any) {
        setCurrentPath(e.key);


        navigate(e.key)
        if (window.innerWidth < 768) {
            dispatch(setSidebar(true))
        }
    }

    const styles = {
        // position: 'sticky',
        // zIndex: 1,
        // width: '100%',
    }
    return (
        <>

            <Sider

                trigger={null} collapsible collapsed={sidebarCollapsed}
                theme={"dark"}
                breakpoint="md"
                collapsedWidth="50"
                onBreakpoint={(broken) => {
                    // console.log(broken);

                    dispatch(setSidebar(broken))
                }}
                style={styles}
            // onCollapse={(collapsed, type) => {
            //     console.log(collapsed, type);
            // }}
            >
                {"<Profile"}
                <Menu
                    theme={"dark"}
                    mode="inline"
                    style={{
                        // background : "red"
                    }}
                    defaultSelectedKeys={[currentPath]}
                    items={navitems}
                    onClick={handleClick}
                    selectedKeys={[currentPath]}
                // onClick={({ key }) => {

                //     navigate(key)
                //     if (window.innerWidth < 768) {
                //         dispatch(setSidebar(true))
                //     }


                // }}
                />


            </Sider>
        </>
    )
}

export default Sidebar