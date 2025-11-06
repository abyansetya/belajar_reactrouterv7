import { createCookieSessionStorage } from "react-router";

type Session = {
  userId?: string;
};

const session = createCookieSessionStorage<Session>({
  cookie: {
    name: "my-session",

    //opsional
    httpOnly: true, //supaya cookie nya cuma bisa diakses di server
    path: "/",
  },
});

export const { getSession, commitSession, destroySession } = session;
