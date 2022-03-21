import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Head from "next/head";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <Head>
        <title>ZH Metaverse | Login </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center">
        <Image
          src={"/img/logo.gif"}
          height={200}
          width={200}
          className=" object-cover rounded-full"
        />
        <button
          onClick={() => authenticate()}
          className="bg-yellow-500 rounded-lg p-5 font-bold mt-4 animate-pulse hover:opacity-50"
        >
          Login to ZH Metaverse
        </button>
        <p className="my-4 font-medium text-center">
          If want to view the demo please contact owner to relaunch Moralis
          Database
        </p>
      </div>
      <div className="w-full h-screen">
        <Image
          src={"https://links.papareact.com/55n"}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
