import { useState } from 'react'
import MySvgComponent from './component/ReactFoot'
// import MySvg from './component/MySvg'
import Draw from './component/Draw'

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header style={{
            padding: 0,
            background: colorBgContainer,
          }}>
            <div>
              <h2>Header</h2>
            </div>
          </Header>
          <Content style={{
            // margin: '0 16px',
          }}
          >
            {/* <MySvg /> */}
            <Draw />
          </Content>
          <Footer style={{
            textAlign: 'center',
          }}>
            <MySvgComponent />
          </Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default App
