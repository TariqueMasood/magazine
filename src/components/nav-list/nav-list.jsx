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
      path: "/blog",
    },
    {
      label: "News & Articles",
      path: "/news-article",
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
    <ul>
      {links.map((link) => {
        return (
          <li className={styles.navItem}>
            <NavLink label={link.label} path={link.path} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavList;
