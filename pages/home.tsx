import PostFeed from "../components/PostFeed";
import Metatags from "../components/Metatags";
import Loader from "../components/Loader";
import { firestore, fromMillis, postToJSON } from "../lib/firebase";

import { useState } from "react";
import HomeSearchBar from "../components/HomeSearchBar";
import FeaturedArt from "../components/FeaturedArt";

// Max post to query per page
const LIMIT = 1;

export default function Home(props: { posts: any }) {
  const [posts, setPosts] = useState(props.posts);
  const [loading, setLoading] = useState(false);

  const [postsEnd, setPostsEnd] = useState(false);

  // Get next page in pagination query
  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor =
      typeof last.createdAt === "number"
        ? fromMillis(last.createdAt)
        : last.createdAt;

    // TODO Move this to the firestore file
    const query = firestore
      .collectionGroup("posts")
      .where("published", "==", true)
      .orderBy("createdAt", "desc")
      .startAfter(cursor)
      .limit(LIMIT);

    const newPosts = (await query.get()).docs.map((doc) => doc.data());

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };

  return (
    <main>
      <Metatags
        title="Home Page"
        description="Get the latest posts on our site"
      />
      {/* TODO I think its h-full here? Not sure */}
      <div className="flex-col bg-red-500 h-max mx-auto w-full">
        <div>
          <h1 className="text-center pt-10">WELCOME TO ART-FINDER</h1>
        </div>
        <div className="h-12 w-3/5 mx-auto mt-12">
          <HomeSearchBar />
        </div>
        <div className="bg-green-500 h-24 w-4/5 mx-auto mt-20">
          <p>TODO Add topics bar component</p>
        </div>
        <div className="bg-green-500 h-24 w-4/5 mx-auto mt-20">
          <p>TODO Add featured artists component</p>
        </div>
        <div className="h-screen w-4/5 mx-auto mt-20">
          <FeaturedArt />
        </div>
      </div>
      {/* <div className="container mx-auto bg-red-600 w-1/2 h-full">
        <div>
          <h1 className="text-center"> POSTS </h1>
          <div>
            <PostFeed posts={posts} admin={undefined} />
          </div>
          {!loading && !postsEnd && (
            <button onClick={getMorePosts}>Load more</button>
          )}
          <Loader show={loading} />
          {postsEnd && "You have reached the end!"}
        </div>
      </div> */}
    </main>
  );
}
