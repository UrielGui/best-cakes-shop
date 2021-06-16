import React from 'react';
import * as Styled from './Styled';
import { Container } from '../../Styles/Globals';

export default function Footer() {
    return (
        <div className="footer">
            <Styled.FooterStyle>
                <Container>
                    <Styled.FooterDiv>
                        <Styled.FooterAuthor>
                            © 2021 - Desenvolvido por:&nbsp;
							<a href="https://github.com/UrielGui/"
							target="blank">Uriel Guimarães</a>
                        </Styled.FooterAuthor>
                    </Styled.FooterDiv>
                </Container>
            </Styled.FooterStyle>
        </div>
    );
}
