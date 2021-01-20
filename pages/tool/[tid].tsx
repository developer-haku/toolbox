import React, { createElement } from "react";
import { useRouter } from "next/router";
import DefaultLayout from "../../components/DefaultLayout/";
import { Tools } from "../../components/Tools/";

const ToolId = () => {
  const router = useRouter();
  const { tid } = router.query;
  let toolIdValid =
    !isNaN(parseInt(String(tid))) && Tools[String(tid)] ? true : false;

  return (
    <DefaultLayout breadcrumb={{ name: "tool" }}>
      {toolIdValid ? (
        createElement(Tools[String(tid)])
      ) : (
        <div>Cannot find the tool with id: {tid}</div>
      )}
    </DefaultLayout>
  );
};

export default ToolId;
