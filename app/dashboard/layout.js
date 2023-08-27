import Link from "next/link";

const DashboardLayout = (props) => {
  return (
    <div>
      <nav className="bg-black text-white py-5 px-5 flex justify-between">
        <div className="font-bold text-xl">Logo</div>
        <ul className="flex gap-5">
          <Link href="/">Home</Link>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen w-[15vw] bg-black p-5 text-white">
          <ul className="flex flex-col gap-6 font-medium">
            <li>Dashboard</li>
            <Link href="/dashboard/todos">Todos</Link>
            <Link href="/dashboard/users">Users</Link>
            <Link href="/dashboard/profile">Profile</Link>
          </ul>
        </div>

        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
