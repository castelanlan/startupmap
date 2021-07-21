import styled from "styled-components";

export const NavBar = styled.div`
    width: 100%;
    position: sticky;
    border-bottom: solid 4px;
    border-color: var(--color-green);
    box-shadow: var(--panel-shadow);
    text-align: right;
    justify-content: space-between;
    display: inline-block;
`;

export const LinksRow = styled.div`
    padding-top: 7px;
    margin-top: 7px;
    display: inline-block;
    justify-content: flex-end;
    align-items: center;
    padding: 16px;
    margin-left: 7px;

    > a {
        font-size: 20px;
        text-decoration: none;
        color: var(--color-hlink);
        padding: 2.5px 0;

        & + a {
            background-color: transparent; // pra um texto não cobrir o outro
            padding-left: 10px;
            border-left: 2px solid var(--color-hlight);
            margin-left: 10px;
        }
    }
`;

export const Container = styled.div`
`;

export const LoginStartUpBox = styled.div`
    display: inline-block;
    align-items: center;
    justify-content: center;
`;

export const LoginStartUpButton = styled.button`
    background-color: var(--color-hlink);
`;