import { Input, Typography } from "antd";
import { useState } from "react";
import styles from "./WordsToLines.module.css";

const { TextArea } = Input;
const { Text } = Typography;

const WordsToLines = () => {
  const [state, setState] = useState({ userInput: "", output: "" });

  const update = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    let output = event.target.value.trim();
    if (["'", '"'].includes(output.charAt(0))) output = output.slice(1);
    if (["'", '"'].includes(output.charAt(output.length - 1)))
      output = output.slice(0, -1);
    output = output.replace(/\s+/g, "\n");
    setState({ ...state, userInput: event.target.value, output: output });
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

export default WordsToLines;
