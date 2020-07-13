import React from 'react';

import {
    InfoBoxWrapper,
    InfoBoxHeader,
    InfoBoxIcon,
    InfoBoxAbout,
    InfoBoxBtnJoin,
    InfoBoxFooter,
    InfoBoxSubheader,
    InfoBoxSubheaderBox,
    InfoBoxSubheaderFigure,
    InfoBoxSubheaderImg,
    InfoBoxTitle,
    InfoBoxSubheaderBoxText,
} from './InfoBoxStyles';

// Icons
import IconLocation from '../../assets/img/location-icon.png';
import IconTime from '../../assets/img/time-icon.png';

const displaySubheader = (props) => {
    let content = '';

    if (!props.typeSpeakers) {
        content = (
            <InfoBoxSubheader>
                <InfoBoxSubheaderBox>
                    <InfoBoxSubheaderFigure>
                        <InfoBoxSubheaderImg src={IconLocation} alt="Location icon" />
                    </InfoBoxSubheaderFigure>
                    <InfoBoxSubheaderBoxText>{props.location}</InfoBoxSubheaderBoxText>
                </InfoBoxSubheaderBox>
                <InfoBoxSubheaderBox>
                    <InfoBoxSubheaderFigure>
                        <InfoBoxSubheaderImg src={IconTime} alt="Time icon" />
                    </InfoBoxSubheaderFigure>
                    <InfoBoxSubheaderBoxText>{props.dateTime}</InfoBoxSubheaderBoxText>
                </InfoBoxSubheaderBox>
            </InfoBoxSubheader>
        );
    }

    return content;
}

const InfoBox = (props) => {
    return (
        <InfoBoxWrapper>
            <InfoBoxHeader>
                <InfoBoxIcon iconUrl={props.icon} />
                <InfoBoxTitle>{props.title}</InfoBoxTitle>
            </InfoBoxHeader>
            {displaySubheader(props)}
            <InfoBoxAbout>{props.about}</InfoBoxAbout>
            <InfoBoxFooter>
                <InfoBoxBtnJoin href="#">{props.btnText}</InfoBoxBtnJoin>
            </InfoBoxFooter>
        </InfoBoxWrapper>
    );
}

export default InfoBox;