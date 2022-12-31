import styles from "../../styles/Admin.module.css";
import AuthCheck from "../../components/AuthCheck";
import {
  firestore,
  auth,
  serverTimestamp,
  getUserWithUsername,
  postToJSON,
} from "../../lib/firebase";
import ImageUploader from "../../components/ImageUploader";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import {
  useDocumentData,
  useDocumentDataOnce,
} from "react-firebase-hooks/firestore";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext } from "../../lib/context";

export default function AdminPostEdit(props) {
  const [post, setPost] = useState({});
  const router = useRouter();

  useEffect(() => {
    async function getPost() {
      const username = "idk";
      const { slug } = router.query;
      const userDoc = await getUserWithUsername(username);
      const postQuery = userDoc.ref.collection("posts").doc(slug);
      const postResp = await postQuery.get();
      setPost(postResp.data());
    }
    getPost();
  }, [router.query, post]);

  return (
    <AuthCheck>
      <PostManager post={post} />
    </AuthCheck>
  );
}

function PostManager(post) {
  const [preview, setPreview] = useState(false);

  if (Object.keys(post).length === 0) {
    return <></>;
  }

  return (
    <main className={styles.container}>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm postRef={post} defaultValues={post} preview={preview} />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>
              {preview ? "Edit" : "Preview"}
            </button>
            <Link href={`/${post.username}/${post.slug}`}>
              <button className="btn-blue">Live view</button>
            </Link>
            <DeletePostButton slug={slug} />
          </aside>
        </>
      )}
    </main>
  );
}

function PostForm({ defaultValues, postRef, preview }) {
  const { register, handleSubmit, formState, reset, watch } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const { isValid, isDirty } = formState;

  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });

    toast.success("Post updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <ImageUploader />

        <textarea
          {...register("content", {
            maxLength: { value: 20000, message: "content is too long" },
            minLength: { value: 10, message: "content is too short" },
            required: { value: true, message: "content is required" },
          })}
        ></textarea>

        <fieldset>
          <input
            className={styles.checkbox}
            type="checkbox"
            {...register("published")}
          />
          <label>Published</label>
        </fieldset>

        <button
          type="submit"
          className="btn-green"
          disabled={!isDirty || !isValid}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

function DeletePostButton({ slug }) {
  const router = useRouter();

  const deletePost = async () => {
    const doIt = confirm("are you sure!");
    if (doIt) {
      await postRef.delete();
      router.push("/admin");
      toast("post annihilated ", { icon: "🗑️" });
    }
  };

  return (
    <button className="btn-red" onClick={deletePost}>
      Delete
    </button>
  );
}
