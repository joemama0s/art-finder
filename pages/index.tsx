import { useRouter } from "next/router";
import HomePage from "./home";
import Navbar from "./../components/Navbar";
import { firestore, fromMillis, postToPostStruct } from "../lib/firebase";
import { useState } from "react";
import { PostStruct } from "./../types/posts";

export async function getServerSideProps() {
  const postsQuery = firestore
    .collectionGroup("posts")
    .where("published", "==", true)
    .orderBy("createdAt", "desc")
    .limit(2);

  const posts = (await postsQuery.get()).docs.map(postToPostStruct);

  return {
    props: { posts: posts }, // will be passed to the page component as props
  };
}

export default function Index(props: { posts: PostStruct[] }) {
  const router = useRouter();
  const [posts, setPosts] = useState(props.posts);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      {/* <Header /> */}
      <Navbar />
      <h1>my header</h1>

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        {/* <HeroHome />
        <Features />
        <Testimonials /> */}
        {/* TODO This is incorrect below */}
        <HomePage posts={posts} />
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
