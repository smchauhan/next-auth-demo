import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div>
        <p>You must be signed in to view this page.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user?.name}</p>
    </div>
  );
}
