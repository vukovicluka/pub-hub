import React from 'react';

import {
    SectionHeroWrapper,
    SectionHeroDataContainer,
    SectionHeroTitle,
    SectionHeroOrganizer,
    SectionHeroDate,
    SectionHeroBtn,
} from './HeroStyle';

import ImgEvent from '../../assets/img/event.jpg';

const Hero = () => {
    return (
        <SectionHeroWrapper imgUrl={ImgEvent}>
            <SectionHeroDataContainer>
                <SectionHeroTitle>Tjedan karijera</SectionHeroTitle>
                <SectionHeroOrganizer>FOI</SectionHeroOrganizer>
                <SectionHeroDate>20.10.2020. - 26.10.2020.</SectionHeroDate>
                <SectionHeroBtn to="/">Prijavi se</SectionHeroBtn>
            </SectionHeroDataContainer>
        </SectionHeroWrapper>
    );
}

export default Hero;