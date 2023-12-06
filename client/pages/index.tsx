import { useEffect } from "react";
import MsgList from "../components/MsgList";
import { GET_MESSAGES } from "../graphql/message";
import { fetcher } from "../queryClient";

const app = ({ smsgs }) => (
  <>
    <h1>SIMPLE SNS</h1>
    <MsgList smsgs={smsgs} />
  </>
);

export const getServerSideProps = async () => {
  const { messages: smsgs } = await fetcher(GET_MESSAGES);
  return {
    props: { smsgs },
  };
};
export default app;
