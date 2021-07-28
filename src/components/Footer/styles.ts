import styled from "styled-components";

export const Container = styled.div`
    bottom: 0;
    width: 100%;
    background-color: var(--color-bg);
`;


export const DivColunas = styled.div` // fix: quebrei as colunas
    text-align: center;
    display: block;
    border-top: solid 4px;
    border-color: var(--color-green);
    column-count: 4;
`;

export const Coluna = styled.div`
`;