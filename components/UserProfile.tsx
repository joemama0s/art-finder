// UI component for user profile
export default function UserProfile({ user }) {
  return (
    <div>
      <img src={user.photoURL || "/hacker.png"} />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || "Anonymous User"}</h1>
    </div>
  );
}
