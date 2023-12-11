"use client";

import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Svg } from '@/components'

import styles from './layout.module.scss'
import Image from 'next/image';
import Link from 'next/link';

const { Header, Sider, Content } = Layout;

export default function WithMenu({ children }: React.PropsWithChildren) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={styles.layout}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className={styles.system_logo}>
          <Image
            className={styles.logo}
            src="/logo.gif"
            alt="logo"
            width={32}
            height={32}
          />
          <span className={styles.system_name}>ADMIN</span>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          className={styles.menu}
          items={[
            {
              key: '1',
              icon: <Svg name="menu-home"/>,
              label: <Link href="/admin/home">首页</Link>,
            },
            {
              key: '2',
              icon: <Svg name="menu-chart"/>,
              label: <Link href="/admin/data">数据分析</Link>,
            },
            {
              key: '3',
              icon: <Svg name="menu-data"/>,
              label: <Link href="/admin/product">产品管理</Link>,
            },
            {
              key: '4',
              icon: <Svg name="menu-form"/>,
              label: <Link href="article">文章发布</Link>,
            },
            {
              key: '5',
              icon: <Svg name="menu-system"/>,
              label: <Link href="system">系统设置</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
