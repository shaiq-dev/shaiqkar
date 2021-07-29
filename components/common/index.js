import styled, { css } from 'styled-components';
export const Container = styled.div`
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 32px;
    width: auto;

    @media (min-width: 1024px) {
        max-width: 960px;
    }
    @media (min-width: 1216px) {
        max-width: 1152px;
    }
    @media (min-width: 1480px) {
        max-width: 1244px;
    }

    ${(props) =>
        props.fluid &&
        css`
            padding: 0;
            margin: 0;
            max-width: 100% !important;
        `}
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;

    ${(props) =>
        props.col &&
        css`
            flex-direction: column;
        `}

    ${(props) =>
        props.jSpaceBetween &&
        css`
            justify-content: space-between;
        `};
    ${(props) =>
        props.jFlexEnd &&
        css`
            justify-content: flex-end;
        `};
    ${(props) =>
        props.jCenter &&
        css`
            justify-content: center;
        `};
    ${(props) =>
        props.alignTop &&
        css`
            align-items: flex-start;
        `};

    ${(props) =>
        props.noHeight &&
        css`
            height: 0;
        `};
    ${(props) =>
        props.hFull &&
        css`
            height: 100%;
        `};
`;
