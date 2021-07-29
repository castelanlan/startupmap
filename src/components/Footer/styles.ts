import styled from "styled-components";

export const Container = styled.div`    
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: var(--color-bg);
`;


export const DivColunas = styled.div` // fix: quebrei as colunas
    text-align: center;
    display: block;
    border-top: solid 4px;
    border-color: var(--color-green);
    column-count: 4;
    color: white;
`;

export const Coluna = styled.div``;