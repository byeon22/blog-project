import React from "react";
import { styled } from "styled-components";

const StyledHeader = styled.header`
    background-color: #74b9ff;

    position:absolute;
    left:15rem;
    right:0;
    top:0;

    padding:1rem;
`;

function Header() {
    return(
        <StyledHeader>
            <h1>Blog Project Title</h1>
        </StyledHeader>
    );
}

export default Header;