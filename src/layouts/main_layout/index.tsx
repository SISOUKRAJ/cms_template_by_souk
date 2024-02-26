import React, { useState } from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import {
  Avatar,
  Breadcrumb,
  Button,
  Divider,
  Flex,
  Layout,
  Menu,
  Popover,
  Space,
  theme,
} from "antd";
import { useNavigate } from "react-router-dom";
import Routers from "../../routes";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/", <PieChartOutlined />),
  getItem("Test", "/test", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const App: React.FC = () => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<any>([items[0]?.key]);

  const breadcrumbList: any = [];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = (e: any) => {
    setMenuActive(e.keyPath);
    navigate(e.key);
  };

  const active1: any =
    menuActive.length === 1 && items.filter((e) => e?.key === menuActive[0]);
  const active2: any =
    menuActive.length > 1 && items.filter((e) => e?.key === menuActive[1]);
  const children = active2[0]?.children?.filter(
    (e: any) => e?.key === menuActive[0]
  );

  menuActive.length === 1 && breadcrumbList.push(active1 && active1[0].label);
  menuActive.length > 1 && breadcrumbList.push(active2 && active2[0].label);
  menuActive.length > 1 && breadcrumbList.push(children && children[0].label);

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
      <Divider />
      <p>Content</p>
    </div>
  );

  return (
    <Layout hasSider>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div>
          <img
            width="100%"
            height={100}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style={{ objectFit: "cover", padding: 10 }}
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout style={collapsed ? { marginLeft: 80 } : { marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Flex justify="space-between" align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <Space
              wrap
              style={{
                marginRight: 20,
              }}
            >
              <Popover
                content={content}
                title="Title"
                trigger="hover"
                placement="bottomRight"
              >
                <Avatar
                  size={40}
                  src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
                />
              </Popover>
            </Space>
          </Flex>
        </Header>
        <Content
          style={{
            margin: "0 16px",
            overflow: "auto",
          }}
        >
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={breadcrumbList.map((item: any) => {
              return {
                title: item,
              };
            })}
          />
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routers />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
