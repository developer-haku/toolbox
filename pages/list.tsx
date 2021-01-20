import DefaultLayout from "../components/DefaultLayout/";
import { List, Typography } from "antd";
import { toolList } from "../ToolMeta/ToolMeta";

const list = () => {
  return (
    <DefaultLayout breadcrumb={{ name: "list" }}>
      <div>
        <List
          dataSource={toolList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Typography.Link href={`/tool/${item.id}`}>
                    Tool {item.id}: {item.name}
                  </Typography.Link>
                }
                description={item.desc}
              />
            </List.Item>
          )}
        />
      </div>
    </DefaultLayout>
  );
};

export default list;
