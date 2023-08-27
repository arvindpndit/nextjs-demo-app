import React from "react";

const DashboardLayout = (props) => {
  return (
    <div>
      <nav className="bg-black text-white py-5 px-5 flex justify-between">
        <div className="font-bold text-xl">Logo</div>
        <ul className="flex gap-5">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div className="flex">
        <div className="h-screen w-[15vw] bg-black p-5 text-white">
          <ul className="flex flex-col gap-6 font-medium">
            <li>Dashboard</li>
            <li>Credits</li>
            <li>Payment</li>
            <li>Profile</li>
          </ul>
        </div>

        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
