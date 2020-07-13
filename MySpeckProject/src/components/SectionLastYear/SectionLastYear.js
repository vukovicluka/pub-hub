import React from 'react';

import {
    SectionLastYearWrapper,
    SectionLastYearInner,
    SectionLastYearTitle,
    SectionLastYearParagraph,
    SectionLastYearFigure,
    SectionLastYearImg,
} from './SectionLastYearStyle';

import ImgLastYear from '../../assets/img/last-year.jpg';

const SectionLastYear = () => {
    return (
        <SectionLastYearWrapper>
            <SectionLastYearInner>
                <SectionLastYearTitle>FOI tjedan karijera 2019</SectionLastYearTitle>
                <SectionLastYearParagraph>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from
                a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable source.</SectionLastYearParagraph>
                <SectionLastYearFigure>
                    <SectionLastYearImg src={ImgLastYear} alt="FOI careers 2019" />
                </SectionLastYearFigure>
            </SectionLastYearInner>
        </SectionLastYearWrapper>
    );
}

export default SectionLastYear;