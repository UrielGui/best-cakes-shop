import styled from 'styled-components';

export const FooterStyle = styled.footer`
    background: #3a0f2e;
    color: #fff;
`;

export const FooterDiv = styled.div`
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: flex-end;
    @media (max-width: 945px) {
        justify-content: center;
    }
`;

export const FooterAuthor = styled.span`
    font-size: 14px;
`;
