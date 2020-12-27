import React from 'react';
import 'antd/dist/antd.css';
import {withFirebase} from "../../Firebase";
import { Menu, Dropdown } from 'antd';
import {UserOutlined } from '@ant-design/icons';

const UserActions = ({ firebase }) => {
    // function handleMenuClick(e) {
    //     message.info('Click on menu item.');
    //     console.log('click', e);
    // }

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
                Profile
            </Menu.Item>
            <Menu.Item  key="3" icon={<UserOutlined />}>
                Messages
            </Menu.Item>
            <Menu.Item onClick={firebase.doSignOut} className={'text-danger'} key="4" icon={<UserOutlined />}>
                Log out
            </Menu.Item>
        </Menu>
    );
    return(
            <Dropdown.Button overlay={menu}  placement="bottomRight"
                             icon={
                                 <UserOutlined
                                     style={{
                                         fontSize: '28px',
                                         borderRadius: '50%',
                                         border: 'none'
                                     }}
                                 />
                             }
            />
    )
}

export default withFirebase(UserActions);