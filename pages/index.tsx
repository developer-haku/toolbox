import DefaultLayout from "../components/DefaultLayout/";
import { Typography, Button } from "antd";
import { ToolFilled } from "@ant-design/icons";
import styles from "../styles/pages/index.module.css";

const { Text, Title } = Typography;

const index = () => {
  return (
    <DefaultLayout breadcrumb={{ name: "home"}}>
      <div className={styles.home}>
        <div>
          <img className={styles.logo} src="/images/logo.png" />
          <Title level={2}>Haku's Toolbox</Title>
          <Text>Just some tools I wrote for personal uses.</Text>
          <Button icon={<ToolFilled />} className={styles.button} href="/list">
            Open the Toolbox
          </Button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default index;
