import React, { useContext } from 'react';
import * as Styled from './Styled';
import { ProductSortOption } from '../../../contexts';
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Sidebar() {

    // eslint-disable-next-line no-unused-vars
    let { sortOption, setSortOption, sortOptionValue1, setSortOptionValue1, sortOptionValue2, setSortOptionValue2 } = useContext(ProductSortOption)

    return (
          <Styled.Sidebar>
            <Styled.SidebarContainer>
              <h4>Ordem de exibição</h4><br></br>
            <Styled.FilterTextClick onClick={() => {
          setSortOption(sortOption = "price")
          setSortOptionValue1(sortOptionValue1 = 1);
          setSortOptionValue2(sortOptionValue2 = -1)
        }}><AiOutlineArrowDown /> Mais Barato</Styled.FilterTextClick>

        <br></br><br></br>
        <Styled.FilterTextClick onClick={() => {
          setSortOption(sortOption = "price")
          setSortOptionValue1(sortOptionValue1 = -1);
          setSortOptionValue2(sortOptionValue2 = 1)
        }}><AiOutlineArrowUp /> Mais Caro</Styled.FilterTextClick>
        
        <br></br><br></br>

        <Styled.FilterTextClick onClick={() => {
          setSortOption(sortOption = "name")
          setSortOptionValue1(sortOptionValue1 = 1);
          setSortOptionValue2(sortOptionValue2 = -1)
        }}><AiOutlineArrowRight /> Ordem Crescente</Styled.FilterTextClick>

        <br></br><br></br>

        <Styled.FilterTextClick onClick={() => {
          setSortOption(sortOption = "name")
          setSortOptionValue1(sortOptionValue1 = -1);
          setSortOptionValue2(sortOptionValue2 = 1)
        }}><AiOutlineArrowLeft /> Ordem Decrescente</Styled.FilterTextClick>
        </Styled.SidebarContainer>
        </Styled.Sidebar>
);
}