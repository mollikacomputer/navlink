import React from "react";
import NavLink from "./NavLink";
const navLinks = [
    {
    path:'/',
    title:"Home",
    },
    {
    path:'/about',
    title:"About",
    },
    {
    path:'/blog',
    title:"Blog",
    },
    {
    path:'/services',
    title:"Services",
    }
];
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container">
        <h2 className="text-3xl font-semibold"> Next Ranjit</h2>
        <ul className="flex items-center justify-center">
            {navLinks.map(({path,title})=>(
            <li key={path} className="mx-2">
                    <NavLink exact={path === '/'} activeClassName={"text-blue-500"} href={path} >
                       {title}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  );
};
export default Navbar;
