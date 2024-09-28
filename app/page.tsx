import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <>
        <Header label="Home" />
    </>
  );
}
