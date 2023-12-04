import type { NextPage } from "next";
import MsgList from "../components/MsgList";

const app: NextPage = () => {
  return (
    <>
      <h1>SIMPLE SNS</h1>

      <MsgList />
    </>
  );
};

export default app;
