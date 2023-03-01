import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header(props) {
  const [activeItem, setActiveItem] = useState("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("about");
    if (pathname === "/projects") setActiveItem("projects");
  }, [pathname]);

  const navBar = (activeItem, route, setActiveItem, name) => {
    if (activeItem !== name)
      return (
        <Link href={route}>
          <a>
            <span className="capitalize" onClick={() => setActiveItem("about")}>
              {name}
            </span>
          </a>
        </Link>
      );
  };
  return (
    <div className="flex justify-between mx-4 my-2 text-xl">
      <span className="underline underline-offset-8 decoration-green-500 capitalize font-extrabold text-yellow-500">
        {activeItem}
      </span>
      {activeItem === "projects" && (
        <p className="text-sm">Here are a few projects that can be viewed </p>
      )}

      <div className="flex space-x-3 font-bold">
        {navBar(activeItem, "/", setActiveItem, "about")}

        {navBar(activeItem, "/projects", setActiveItem, "projects")}
      </div>
    </div>
  );
}

export default Header;
