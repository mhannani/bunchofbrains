import React from 'react';
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';
import {UserOutlined, DashboardOutlined, ProfileOutlined, MessageOutlined } from '@ant-design/icons';
import withAuthorization from "../../Session/withAuthorization";
import AuthUserContext from "../../Session/context";
const UserActions = ({ firebase }) => {
    // function handleMenuClick(e) {
    //     message.info('Click on menu item.');
    //     console.log('click', e);
    // }

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<ProfileOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item  key="3" icon={<MessageOutlined />}>
                Messages
            </Menu.Item>
            <Menu.Item onClick={firebase.doSignOut} className={'text-danger'} key="4" icon={<UserOutlined />}>
                Log out
            </Menu.Item>
        </Menu>
    );
    return(
        <AuthUserContext.Consumer>
            {authUser => (
                <div className={'container'}>
                    <Dropdown.Button overlay={menu} placement="bottomRight"
                                    style={{
                                        float: 'left',
                                    }}
                                    className="dropdown-btn mt-1 my-auto"
                                    icon={
                                        <UserOutlined
                                            className={'bg-red'}
                                            style={{
                                                fontSize: '25px',
                                                // backgroundColor: '#f0f0f0',
                                                borderRadius: '50%',
                                            }}
                                        />
                                    }
                >
                        {authUser.username.toUpperCase()}
                    </Dropdown.Button>
                </div>
            )
            }
        </AuthUserContext.Consumer>

    )
}
const condition = authUser => !!authUser;
export default withAuthorization(condition)(UserActions);