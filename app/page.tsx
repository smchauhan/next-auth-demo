import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">NextAuth.js v4 with GitHub & Google</h1>
      <LoginButton />
{/* <Navbar/> */}
    </main>
  );
}
