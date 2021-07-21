import styled, { css } from "styled-components";

import { AiOutlineSearch } from 'react-icons/ai';

const iconCSS = css`
    width: 30px;
    height: 30px;
`;

export const SearchIcon = styled(AiOutlineSearch)`${iconCSS}`;
export const SMPIcon = styled.div``;

export const LinksDiv = styled.div`
    padding-top: 10px;
    margin-top: 10px;
`;

export const NavBar = styled.div`
    position: sticky;
    /* height: 100px; */
    border-bottom: solid 4px;
    border-color: var(--color-bg);
    box-shadow: var(--panel-shadow);
    text-align: right;
`;

export const NavRow = styled.ul`
    display: inline-block;
    font-size: 30px;
    
    
    > a {
        text-decoration: none;
        color: var(--color-hlink);
        padding: 2.5px 0;

    & + a {
        padding-left: 10px;
        border-right: 1px solid var(--color-hlight);
        margin-left: 10px;
    }
}
`;

export const Container = styled.div``;

export const Wrapper = styled.div``;

export const LoginStartUpBox = styled.div``;

export const LoginStartUpButton = styled.button``;