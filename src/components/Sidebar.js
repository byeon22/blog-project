import React from "react";
import styled from "styled-components";

const StyledAside = styled.aside`
    background-color: #ffeaa7;
    position: fixed;
    left:0;
    top:0;
    bottom:0;
    width:13rem;

    padding:1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index:9999;
`;

const StyledImg = styled.img`
    width:150px;
    height:150px;
    border-radius:70%;
`;

const Title = styled.h1`
    margin-bottom:10px;
`;

const UserID = styled.p`
    margin-top:0;
    color:#808080;
`;

function Sidebar() {
    return(
        <StyledAside>
            <StyledImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
            alt="basic user image"/>
            <Title>My Blog Title</Title>
            <UserID>My ID</UserID>
        </StyledAside>
    );
}

export default Sidebar;