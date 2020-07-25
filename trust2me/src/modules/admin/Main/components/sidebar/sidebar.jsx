import React from 'react';

import {Layout, Menu} from 'antd';
const {Sider} = Layout;

const Sidebar = ({
    classes
}) => {

    return (
        <Layout>
            <Sider width={230}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2">
                        Option 2
                    </Menu.Item>
                </Menu>              
            </Sider>
        </Layout>
    )
}

export default Sidebar;