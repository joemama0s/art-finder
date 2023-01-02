import PostFeed from "../components/PostFeed";
import Metatags from "../components/Metatags";
import Loader from "../components/Loader";
import { firestore, fromMillis, postToJSON } from "../lib/firebase";

import { useState } from "react";

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
      <div className="container mx-auto bg-red-600 w-1/2 h-full">
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
      </div>
    </main>
  );
}
