'use client'
import Education from "@/components/Education";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col text-lg bg-background/10">
      <Introduction />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}
