/* eslint-disable no-unused-vars */
import React, { useContext, useRef } from 'react';
import * as Styled from './Styled';

// Context
import { ProductSortOption } from '../../../Contexts';
import { SearchProductName } from '../../../Contexts';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Sidebar() {
    let {
        sortOption,
        setSortOption,
        sortOptionValue1,
        setSortOptionValue1,
        sortOptionValue2,
        setSortOptionValue2,
    } = useContext(ProductSortOption);

    const { setSearchProduct } = useContext(SearchProductName);
    const refSearch = useRef(null);

    const onSearchButton = () => {
        refSearch.current.focus();
    };

    return (
        <Styled.Sidebar>
            <Styled.SidebarContainer>
                <Styled.SideBarTitleContainer borderRfull>
                    <Styled.SidebarRow>
                        <Styled.SideBarTitle mBottom>
                            Pesquisar
                        </Styled.SideBarTitle>
                        <Styled.FlexSearch>
                            <Styled.InputSearch
                                type="text"
                                ref={refSearch}
                                placeholder="Pesquise aqui..."
                                onChange={(event) => {
                                    setSearchProduct(event.target.value);
                                }}
                            />
                            <Styled.ButtonSearch onClick={onSearchButton}>
                                <BsSearch style={{ color: '#fff' }} />
                            </Styled.ButtonSearch>
                        </Styled.FlexSearch>
                    </Styled.SidebarRow>
                </Styled.SideBarTitleContainer>
            </Styled.SidebarContainer>

            <Styled.SidebarContainer>
                <Styled.SideBarTitleContainer>
                    <Styled.SidebarRow>
                        <Styled.SideBarTitle>
                            Ordem de exibi????o
                        </Styled.SideBarTitle>
                    </Styled.SidebarRow>
                </Styled.SideBarTitleContainer>

                <Styled.SidebarContainerItem>
                    <Styled.FilterTextClick
                        onClick={() => {
                            setSortOption((sortOption = 'price'));
                            setSortOptionValue1((sortOptionValue1 = 1));
                            setSortOptionValue2((sortOptionValue2 = -1));
                        }}
                    >
                        <AiOutlineArrowDown /> Mais Barato
                    </Styled.FilterTextClick>
                </Styled.SidebarContainerItem>

                <Styled.SidebarContainerItem>
                    <Styled.FilterTextClick
                        onClick={() => {
                            setSortOption((sortOption = 'price'));
                            setSortOptionValue1((sortOptionValue1 = -1));
                            setSortOptionValue2((sortOptionValue2 = 1));
                        }}
                    >
                        <AiOutlineArrowUp /> Mais Caro
                    </Styled.FilterTextClick>
                </Styled.SidebarContainerItem>

                <Styled.SidebarContainerItem>
                    <Styled.FilterTextClick
                        onClick={() => {
                            setSortOption((sortOption = 'name'));
                            setSortOptionValue1((sortOptionValue1 = 1));
                            setSortOptionValue2((sortOptionValue2 = -1));
                        }}
                    >
                        <AiOutlineArrowRight /> Ordem Crescente
                    </Styled.FilterTextClick>
                </Styled.SidebarContainerItem>

                <Styled.SidebarContainerItem>
                    <Styled.FilterTextClick
                        onClick={() => {
                            setSortOption((sortOption = 'name'));
                            setSortOptionValue1((sortOptionValue1 = -1));
                            setSortOptionValue2((sortOptionValue2 = 1));
                        }}
                    >
                        <AiOutlineArrowLeft /> Ordem Decrescente
                    </Styled.FilterTextClick>
                </Styled.SidebarContainerItem>
            </Styled.SidebarContainer>
        </Styled.Sidebar>
    );
}
