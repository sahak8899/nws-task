import React from "react";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ category }) {
    const { name, id } = category;

    return <div className="sidebar-item">
        <NavLink to={`${name}/${id}`} className="links" activeClassName="active">{name}</NavLink>
    </div>;
}
