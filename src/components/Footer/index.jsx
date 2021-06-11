import React from 'react';
import * as Styled from './Styled';
import { Container } from '../../styles/globals';

export default function Footer() {
    return (
        <div className="footer">
            <Styled.FooterStyle>
                <Container>
                    <Styled.FooterDiv>
                    <Styled.FooterCopy>© 2021</Styled.FooterCopy>
                    <Styled.FooterAuthor>Desenvolvido por: Uriel Guimarães</Styled.FooterAuthor>
                    </Styled.FooterDiv>
                </Container>
            </Styled.FooterStyle>
            </div>
);
}