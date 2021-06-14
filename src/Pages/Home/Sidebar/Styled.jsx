import styled from 'styled-components';

export const Sidebar = styled.section`
    background: linear-gradient(180deg,#772064 38%,#3a0f2e 61%);
    height: 100%;
    padding: 20px 20px 0px 20px;
    
    @media(max-width: 945px) {
    padding: 20px 140px 0px 140px;
    background: #772064;
  }
  @media(max-width: 450px) {
    padding: 20px 20px 0px 20px;
  }
`
export const SidebarContainer = styled.div`
    background-color: azure;
    border-radius: 20px;
    margin-bottom: 20px;
`

export const SidebarRow = styled.div`
    margin-left: 10px;
`

export const SideBarTitleContainer = styled.div`
    padding: 20px 10px 20px 0px;
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
    font-size: 13px;
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
    padding: 7px;
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