import Editor from "@/components/Editor";
import Header from "@/components/Header";
import InputTextArea from "@/components/InputTextArea";
import TweetFeed from "@/components/tweets/TweetFeed";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <>
        <Header label="Home" />
        {/* <Editor /> */}
        <InputTextArea />
        <TweetFeed />
    </>
  );
}
