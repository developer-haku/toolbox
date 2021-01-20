import React, { ReactNode } from "react";
import Head from "next/head";
import { Layout, Breadcrumb } from "antd";
import { GithubFilled } from "@ant-design/icons";
import ToolSearch from "../ToolSearch/";
import styles from "./DefaultLayout.module.css";

const { Header, Content, Footer } = Layout;

type Props = {
  children?: ReactNode;
  breadcrumb: { name: string };
};

const DefaultLayout = ({ children, breadcrumb }: Props) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Haku's Toolbox</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header className={styles.header}>
        <a href="/">
          <img className={styles.logo} src="/images/logo.png" alt="logo" />
        </a>
        <ToolSearch />
        <a
          className={styles.github}
          href="https://github.com/developer-haku/toolbox"
          target="_blank"
        >
          <GithubFilled className={styles.icon} twoToneColor="#FFFFFF" />
        </a>
      </Header>
      <Content className={styles["content-area"]}>
        <Breadcrumb className={styles.breadcrumb}>
          {breadcrumb.name !== "home" && (
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          )}
          {breadcrumb.name !== "home" &&
            (breadcrumb.name === "list" ? (
              <Breadcrumb.Item>List</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item href="/list">List</Breadcrumb.Item>
            ))}
          {breadcrumb.name === "tool" && (
            <Breadcrumb.Item>Tool</Breadcrumb.Item>
          )}
        </Breadcrumb>
        <div className={styles.content}>{children}</div>
      </Content>
      <Footer className={styles.footer}>Created with ❤️ by Haku</Footer>
    </div>
  );
};

export default DefaultLayout;
