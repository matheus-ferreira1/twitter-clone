import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import Header from "@/components/Header";
import NotificationsFeed from "@/components/NotificationsFeed";

import useCurrentUser from "@/hooks/useCurrentUser";

//protecting the route: only authorized sessions are able to reach
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const Notifications = () => {
  return (
    <>
      <Header showBackArrow label="Notifications" />
      <NotificationsFeed />
    </>
  );
};

export default Notifications;
