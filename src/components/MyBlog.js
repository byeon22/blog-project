import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

function MyBlog() {

    const movePage = useNavigate();

    function gomain() {
        movePage('/');
    }
    
    return(
        <div>
            <Header/>
            <Sidebar/>
            <button onClick={gomain}>main으로 이동</button>
        </div>
    );
}

export default MyBlog;