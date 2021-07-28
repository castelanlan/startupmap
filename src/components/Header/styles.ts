import styled from "styled-components";
import { BiCheck } from 'react-icons/bi'

// ícones
export const OkIcon = styled(BiCheck)``;

// botões
export const LoginStartUpButton = styled.button`
    color: white;
    background-color: var(--color-bg);
    
`;

export const OkButton = styled.button` // botão dentro do modal
    background-color: var(--color-green); // fix: ...
    `;

export const Container = styled.div``;

export const NavBar = styled.div`
    background-color: var(--color-bg);
    padding: 0.5%;
    z-index: 1; // sem isso as divs dentro do painel do meio ficam em cima do header
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-bottom: solid 4px;
    border-color: var(--color-green);
    box-shadow: var(--panel-shadow);
    text-align: right;
`;

export const LinksRow = styled.div` // fix: responsividade
    padding-top: 9px;
    display: inline-block;
    padding: 16px;

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

export const LoginStartUpBox = styled.div`
    display: inline-block;
`;