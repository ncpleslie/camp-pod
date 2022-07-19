import { useState } from "react";
import LogoTitle from "../../public/logo_title.svg";
import ListenNowBtn from "../UI/ListenNowBtn";
import NavLink from "../UI/NavLink";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [links, setLinks] = useState([
    { href: "#episodes", title: "Episodes" },
  ]);

  return (
    <div className="navbar bg-neutral flex flex-row justify-between md:justify-end">
      <div className="navbar-start self-start md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  href={link.href}
                  title={link.title}
                  className="block md:hidden text-lg"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute top-4 left-5 z-50 max-w-[300px] hidden md:block">
        <LogoTitle />
      </div>
      <nav className="flex flex-row gap-8">
        {links.map((link) => (
          <NavLink
            href={link.href}
            title={link.title}
            key={link.href}
            className="hidden md:block"
          />
        ))}
        <ListenNowBtn />
      </nav>
    </div>
  );
};

export default Navbar;
