import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Company from "./components/Company";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <About />
      <Works />
      <Company />
    </div>
  );
}
