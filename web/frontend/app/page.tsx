"use client";
import Aside from "@/components/Aside/Aside.component"
import Navbar from "@/components/Navbar/Navbar.component"
import { useEffect, useState } from "react";

const page = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleShowSideBar = () => setToggleSidebar(!toggleSidebar);
  useEffect(() => {
    console.log(toggleSidebar);

  }, [toggleSidebar])
  return (
    <main>
      <Navbar onClick={handleShowSideBar} toggleNavImg={toggleSidebar} />
      <Aside showAside={toggleSidebar} />
    </main >
  )
}

export default page
