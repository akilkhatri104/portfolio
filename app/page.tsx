import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col bg-background/10">
      <Introduction />
      <Skills />
    </main>
  );
}
