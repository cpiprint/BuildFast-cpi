import Image from "next/image";
import Hero from "@components/Hero";
import FeaturedIn from "@components/FeaturedIn";
import ProblemsComponents from "@components/Problems";
import FeaturesListicle from "@components/FeaturesListicle";

export default function Home() {
  return (
    <main className=" min-h-screen">
        <Hero />
        <FeaturedIn />
        <ProblemsComponents />
        <FeaturesListicle />
    </main>
  );
}
