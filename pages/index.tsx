import { useRouter } from "next/router";
import HomePage from "./home";
import Navbar from "./../components/Navbar";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      {/* <Header /> */}
      <Navbar />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        {/* <HeroHome />
        <Features />
        <Testimonials /> */}
        {/* TODO This is incorrect below */}
        <HomePage posts={undefined} />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}
