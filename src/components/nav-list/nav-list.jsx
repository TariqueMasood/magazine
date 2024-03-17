import NavLink from "../link/link";
import styles from "./nav-list.module.css";

const NavList = () => {
  const links = [
    {
      label: "Magazine",
      path: "/magazine",
    },
    {
      label: "Blogs",
      path: "/blogs",
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
      label: "About",
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
