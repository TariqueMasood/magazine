import { usePathname } from "next/navigation";
import NavLink from "../link/link";

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
      label: "Interviews",
      path: "/interview",
    },
    {
      label: "About Us",
      path: "/about-us",
    },
  ];

  const pathName = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <NavLink
            key={link.label}
            label={link.label}
            path={link.path}
            pathName={pathName}
          />
        );
      })}
    </>
  );
};

export default NavList;
