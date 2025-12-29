import Image from "next/image";
import { contact } from "./data";
import Link from "next/link";
import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";

export default function Home() {
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <main className="flex flex-col bg-background/10">
      <Introduction />
      <Skills />
    </main>
  );
}
