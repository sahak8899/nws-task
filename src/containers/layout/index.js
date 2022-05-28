import React from "react";
import Content from "../content/index.js";
import Sidebar from "../sidebar";

export default function Layout() {
    return (
        <div className="layout">
            <Sidebar />
            <Content />
        </div>
    );
}
