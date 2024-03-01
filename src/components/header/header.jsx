import NavLink from "../link/link";
import styles from "./header.module.css";

const Header = () => {
  const links = [
    {
      label: "Kymriah - The Orphan Medicine",
      path: "#",
    },
    {
      label: "LaGuardia International Airport",
      path: "#",
    },
    {
      label: "September Prime Focus",
      path: "#",
    },
    {
      label: "GERD - Ethopia",
      path: "#",
    },
    {
      label: "CHSRA - Case Study",
      path: "#",
    },
  ];
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          {links.map((link) => (
            <NavLink label={link.label} path={link.path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
