import NavLink from "../link/link";
import styles from "./nav-list.module.css";

const NavList = () => {
  const links = [
    {
      label: "Magazines",
      path: "/magazines",
    },
    {
      label: "News & Articles",
      path: "/blogs",
    },
    {
      label: "Webinars",
      path: "/webinar",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
  ];

  return (
    <>
      {links.map((link) => {
        return <NavLink key={link.label} label={link.label} path={link.path} />;
      })}
    </>
  );
};

export default NavList;
