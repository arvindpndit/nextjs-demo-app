import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl text-center mt-14">HOME PAGE OF NEXTJS APP</h1>
      <Link
        href="/dashboard"
        className="text-3xl mt-10 px-4 py-2 rounded-lg bg-slate-200"
      >
        Go the Dashboard
      </Link>
    </main>
  );
}
