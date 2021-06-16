import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background: #3a0f2e;
    color: #fff;
`;

export const FlexHeader = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 450px) {
        flex-direction: column;
        padding-bottom: 5px;
    }
`;

export const FlexHeaderLogo = styled.div`
    flex-grow: 2;
`;

export const HeaderLogoImg = styled.img`
    width: 215px;
    height: 75px;
`;

export const FlexHeaderRight = styled.div`
    align-self: center;
    position: relative;
    top: -10px;
`;

export const HeaderRight = styled.span`
    position: relative;
    top: 10px;
`;

export const CountItem = styled.small`
    background: ${(props) => props.basket ? '#3ca78a' : '#e91e63'};
    height: 15px;
    width: 19px;
    border-radius: 10px;
    position: relative;
    top: -19px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
`;