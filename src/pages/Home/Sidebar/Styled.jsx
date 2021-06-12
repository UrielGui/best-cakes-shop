import styled from 'styled-components';

export const Sidebar = styled.section`

`

export const SidebarContainer = styled.div`
    background-color: azure;
    margin-top: 20px;
    margin-left: 20px;
    border-radius: 20px;
`

export const SidebarRow = styled.div`
    margin-left: 10px;
`

export const SideBarTitleContainer = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 10px;
    background-color: #3a0f2e;
    margin-bottom: 10px;
    border-radius: ${props => props.borderRfull ? "20px 20px" : "20px 20px 0px 0px"};
`

export const SidebarContainerItem = styled.div`
    margin-left: 10px;
    padding-bottom: 10px;
`

export const FilterTextClick = styled.span `
    cursor: pointer;
    font-size: 12px;
`

export const SideBarTitle = styled.h4`
    color: #fff;
    margin-bottom: ${props => props.mBottom ? "10px" : ""};

`

export const flexSearch = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputSearch = styled.input`
    width: 100%;
    padding: 5px;
    border-radius: 10px 10px 0px 0px;
    border: 0;
    :focus {
        border: 1px #e91e63 solid;
    }
`

export const ButtonSearch = styled.button`
    width: 100%;
    padding: 5px;
    background-color: #e91e63;
    border-radius: 0px 0px 10px 10px;
    :hover {
        opacity: 0.8;
    }
`