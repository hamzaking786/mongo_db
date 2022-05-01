export function Profile({ user }) {
  return (
    <div>
      <h1>Profile</h1>
        { user.google ? <img src={user.google.picture}/> : null}
      <pre>{JSON.stringify(user, undefined, "  ")}</pre>
    </div>
  );
}
