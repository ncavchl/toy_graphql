import { useEffect } from "react";
import MsgList from "../components/MsgList";
import { GET_MESSAGES } from "../graphql/message";
import { GET_USERS } from "../graphql/users";
import { fetcher } from "../queryClient";

const app = ({ smsgs, users }) => {
  console.log("::: ", smsgs, users);
  return (
    <>
      <h1>SIMPLE SNS</h1>
      <MsgList smsgs={smsgs} users={users} />
    </>
  );
};

export const getServerSideProps = async () => {
  const { messages: smsgs } = await fetcher(GET_MESSAGES);
  const { users: users } = await fetcher(GET_USERS);

  return {
    props: { smsgs, users },
  };
};

export default app;
