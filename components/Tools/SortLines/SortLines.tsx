import { useState } from "react";
import styles from "./SortLines.module.css";
import { Input, Typography } from "antd";

const { TextArea } = Input;
const { Text } = Typography;

const SortLines = () => {
  const [state, setState] = useState({ userInput: "", output: "" });

  const update = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setState({
      ...state,
      userInput: event.target.value,
      output: event.target.value.split("\n").sort().join("\n"),
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <Text>Input</Text>
        <TextArea
          className={styles.textarea}
          value={state.userInput}
          onChange={update}
          placeholder="String input"
          autoSize={true}
        />
      </div>
      <div className={styles.column}>
        <Text>Output</Text>
        <TextArea
          className={styles.textarea}
          value={state.output}
          autoSize={true}
        />
      </div>
    </div>
  );
};

export default SortLines;
