import styled from 'styled-components';

import { HiOutlineLocationMarker } from 'react-icons/hi';

export const Container = styled.div`

`;

export const PinIcon = styled(HiOutlineLocationMarker)``;

export const StartUpSection = styled.div`
    position: relative;
    display: flex;
    padding: 10px;
    margin: 14px 0;
`;

export const Foto = styled.div`
`;

export const Texto = styled.div`
    display: block;
    margin: 14px !important; // D:
`;

export const Nome = styled.div`
    > p {
        font-size: 30px;
        margin: 0;
    }
`;

export const Lugar = styled.div`
    margin: 2px;
    display: flex;
    > p {
        font-size: 15px;
        color: #ababab;
        margin: 0;
        margin-left: 5px;
    }
`;

export const Descricao = styled.div`
    margin: 2px;
    margin-top: 5%;

    > p {
        font-size: 20px;
        margin: 0;
    }
`;

export const BotaoContato = styled.button` // fix: !!!important
    position: absolute;
    bottom: 0;
    margin: 14px;
    width: 10%;
    min-width: 60px;
    background-color: var(--color-green) !important; /* :/ */
    border: none;
    color: black !important;
    font-weight: 600;
`;