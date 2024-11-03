import Header from "@/components/Header";
import InputTextArea from "@/components/InputTextArea";
import TweetFeed from "@/components/tweets/TweetFeed";

export default function Home() {
  return (
    <>
        <Header label="Home" />
        <InputTextArea />
        <TweetFeed />
    </>
  );
}
