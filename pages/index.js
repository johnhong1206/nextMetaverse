import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  console.log(user);

  return (
    <div className=" h-screen overflow-y-scroll bg-gradient-to-b from-black to-purple-900 overflow-hidden">
      <Head>
        <title>ZH Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
