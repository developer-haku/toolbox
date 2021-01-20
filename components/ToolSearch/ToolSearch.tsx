import styles from "./ToolSearch.module.css";
import { Input } from "antd";

const { Search } = Input;
const ToolSearch = () => {
  return (
    <Search
      className={styles.search}
      placeholder="Search tools"
      allowClear
      enterButton="Search"
      size="large"
    />
  );
};

export default ToolSearch;
