import Link from "next/link";

const NavLink = ({ label, path }) => {
  return <Link href={path}>{label}</Link>;
};

export default NavLink;
